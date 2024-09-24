// app/api/bookings/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/firebase';

export async function GET() {
  console.log("GET /api/bookings")
  try {
    // Fetch bookings from Firestore
    const bookingsSnapshot = await db.collection('bookings').get();
    const bookingsList = bookingsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(bookingsList, { status: 200 });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ message: 'Failed to retrieve bookings' }, { status: 500 });
  }
}
