// app/bookings/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Booking {
  id: string;
  // Add other properties based on your Firestore data schema
}

const BookingsPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

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
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{JSON.stringify(booking)}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsPage;
