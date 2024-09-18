
const courts: number[] = [1, 2, 3, 4, 5, 6, 7]
const hours: string[] = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm']

const DayView = () => {
  return (
    <table
      className="min-w-full border-20 text-center text-sm font-light text-surface">
      <thead
        className="border-b border-t font-medium">
        <tr>
          <th
            scope="col"
            className="border-e border-l px-6 py-4 sticky left-0">
             
          </th>
          {courts.map(court => (<th
            key={court}
            scope="col"
            className="border-e px-6 py-4">
            Court {court}
          </th>))}
        </tr>
      </thead>
      <tbody>
          {hours.map(hour=>(
            <tr key={`row${hour}`} className="border-b">
              <td
                key={hour}
                className="whitespace-nowrap border-e border-l px-6 py-4 font-bold sticky left-0">
                {hour}
              </td>
              {courts.map(court =>(
                <td
                  key={court + hour}
                  className="whitespace-nowrap border-e px-6 py-4 bg-lime-600">
                   
              </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
        <div className="flex flex-col items-center">
          09/18/2024 Wednesday
        </div>
        <div className="flex flex-col">          
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <DayView />            
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}