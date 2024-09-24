import React from 'react'
import { BookingInfoType } from './DayView'

type BookingModalProps = {
    bookingInfo: BookingInfoType | null,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BookingModal = ({ setShowModal, bookingInfo }: BookingModalProps) => {

    return (
        (
            <>
                <div className='min-w-full flex justify-center items-center fixed inset-0 bg-transparent z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
                    <div className="bg-slate-900 max-w-md flex  max-h-md w-auto m-6 mx-auto rounded">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between pl-5 py-3 pr-0 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold flex basis-6/7">
                                    New booking
                                </h3>
                                <button
                                    className="basis-1/7 pr-0 border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-1 flex-auto">
                                <table
                                    className="min-w-full border-20 text-center text-sm font-light text-surface">
                                    <thead
                                        className="border-b font-medium">
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
                                                {bookingInfo?.date || ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-b whitespace-nowrap px-1 py-1 font-bold sticky left-0">
                                                Hour:
                                            </td>
                                            <td
                                                className="border-b whitespace-nowrap px-0 py-0">
                                                {bookingInfo?.hour || ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-b whitespace-nowrap px-1 py-1 font-bold sticky left-0">
                                                Court:
                                            </td>
                                            <td
                                                className="border-b whitespace-nowrap px-0 py-0">
                                                {bookingInfo?.court || ''}
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
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* overlay */}
                <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
            </>
        )
    )
}

export default BookingModal