import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

const courts: number[] = [1, 2, 3, 4, 5, 6, 7]
const hours: number[] = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

type BookingType = {
    id: string;
    // Add other properties based on your Firestore data schema
}

export type BookingInfoType = {
    date: string,
    hour: number,
    court: number
}

type DayViewProps = {
    date: string
}

const DayView = ({ date }: DayViewProps) => {
    const [bookings, setBookings] = useState<BookingType[]>([]);
    console.log("bookings: ",bookings)
    const [showModal, setShowModal] = useState(false)
    const [bookingInfo, setBookingInfo] = useState<BookingInfoType | null>(null)

    const onClickBooking = (date: string, hour: number, court: number) => {
        setBookingInfo({
            date,
            hour,
            court
        })
        setShowModal(true)
    }

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('/api/bookings');
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <>
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
                                {hour > 11 ? (hour === 12 ? hour : hour % 12) + "pm" : hour + "am"}
                            </td>
                            {courts.map(court => (
                                <td
                                    onClick={() => onClickBooking(date, hour, court)}
                                    key={court + hour}
                                    className="whitespace-nowrap border-e px-0 py-0 bg-lime-600">
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal ? <BookingModal setShowModal={setShowModal} bookingInfo={bookingInfo} /> : null}
        </>
    )
}

export default DayView;