
'use client'

import { useMemo, useState } from "react"
import Datepicker, { DateType, DateValueType } from "react-tailwindcss-datepicker"
import DayView from "./components/DayView";

export default function Home() {
  const today = new Date()

  const [value, setValue] = useState<DateValueType>({
    startDate: today,
    endDate: today
  });

  const onChangeDate = (newDate: DateType | undefined) => {
    // call API to get data
    console.log(newDate)
  }

  const selectedDate = useMemo(() => value!.startDate!.toLocaleDateString('en-NZ', {
    day: 'numeric', month: 'short', year: 'numeric'
  }), [value])

  return (
    <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-700 text-white">
      <div className="text-4xl bg-slate-700 text-white items-center flex flex-col w-full">
        Evergreen Badminton Court Booking
      </div>
      <br />
      <br />
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
        {selectedDate} {value?.startDate?.toLocaleDateString('en-NZ', { weekday: 'long' })}
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-2 lg:-mx-2">
          <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
            <div className="overflow-hidden">
              <DayView date={selectedDate} />
            </div>
          </div>
        </div>
      </div>      
    </main>
  );
}