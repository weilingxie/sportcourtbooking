// app/api/bookings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/firebase';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(`GET /api/bookings/${id}`)
  try {
    const booking = await db.collection('bookings').doc(id!).get();
    if (!booking.exists) {
      return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
    }

    const bookingData = {
      id: booking.id,
      ...booking.data(),
    };

    return NextResponse.json(bookingData, { status: 200 });
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json({ message: 'Failed to retrieve booking' }, { status: 500 });
  }
}
