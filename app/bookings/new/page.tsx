
type NewBookingPageProps = {
    date: string,
    hour: number
}

const NewBookingPage = ({ date, hour }: NewBookingPageProps) => {

    return (
        <div className="w-full max-w-md bg-slate-700 text-white">
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <table
                    className="min-w-full border-20 text-center text-sm font-light text-surface">
                    <thead
                        className="border-b font-medium">
                        <tr>
                            <th
                                scope="col"
                                className="px-0 py-0 sticky left-0">
                                Booking
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                scope="col"
                                className="border-b whitespace-nowrap px-1 py-1 font-bold sticky left-0">
                                Date:
                            </td>
                            <td
                                scope="col"
                                className=" border-b px-0 py-0">
                                {date || "2024-09-22"}
                            </td>
                        </tr>
                        <tr>
                            <td
                                className="border-b whitespace-nowrap px-1 py-1 font-bold sticky left-0">
                                Hour:
                            </td>
                            <td
                                className="border-b whitespace-nowrap px-0 py-0">
                                {hour || '11'}
                            </td>
                        </tr>
                        <tr>
                            <td
                                className="whitespace-nowrap px-1 py-1 font-bold sticky left-0">
                                Name:
                            </td>
                            <td
                                className="whitespace-nowrap px-0 py-0">
                                {'William'}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="min-w-full flex">
                    <button className="justify-center flex basis-1/3  bg-white hover:bg-slate-100 text-slate-700 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Cancel
                    </button>
                    <div className="flex basis-1/3"></div>
                    <button className="justify-center flex basis-1/3 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default NewBookingPage;