
'use client'

import { useState } from "react"
import Datepicker, { DateType, DateValueType } from "react-tailwindcss-datepicker"

const courts: number[] = [1, 2, 3, 4, 5, 6, 7]
const hours: string[] = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']

const DayView: React.FC = () => {
  return (
    <table
      className="min-w-full border-20 text-center text-sm font-light text-surface">
      <thead
        className="border-b border-t font-medium">
        <tr>
          <th
            scope="col"
            className="border-e border-l px-0 py-0 sticky left-0">

          </th>
          {courts.map(court => (<th
            key={court}
            scope="col"
            className="border-e px-0 py-0">
            Court {court}
          </th>))}
        </tr>
      </thead>
      <tbody>
        {hours.map(hour => (
          <tr key={`row${hour}`} className="border-b">
            <td
              key={hour}
              className="whitespace-nowrap border-e border-l px-1 py-1 font-bold sticky left-0">
              {hour}
            </td>
            {courts.map(court => (
              <td
                key={court + hour}
                className="whitespace-nowrap border-e px-0 py-0 bg-lime-600">
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Home() {
  const today = new Date()
  const [value, setValue] = useState<DateValueType | null>({
    startDate: today,
    endDate: today
  });

  const onChangeDate = (newDate: DateType | undefined) => {
    // call API to get data
    console.log(newDate)
  }

  return (
    <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-700 text-white">
      <div className="flex flex-col sm:w-full md:w-1/2 lg:w-1/3 mx-0">
        <Datepicker
          // inputClassName="border bg-slate-300 text-black"
          // containerClassName="bg-red"
          showFooter={true}
          asSingle={true}
          useRange={false}
          value={value}
          onChange={newValue => {
            onChangeDate(newValue?.startDate)
            return setValue(newValue)
          }}
        />
      </div>
      
      <br />
      <h1 className="flex flex-col items-center text-2xl font-bold">
        {value?.startDate?.toLocaleDateString('en-NZ', {
          day: 'numeric', month: 'short', year: 'numeric'
        })} {value?.startDate?.toLocaleDateString('en-NZ', { weekday: 'long' })}
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-2 lg:-mx-2">
          <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
            <div className="overflow-hidden">
              <DayView />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}