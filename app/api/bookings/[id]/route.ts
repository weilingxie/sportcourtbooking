// app/api/bookings/[id]/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/firebase';

export async function GET(request: Request,
  { params }: { params: { id: string } }) {
  const id = params.id;
  console.log(`GET /api/bookings/${id}`)
  try {
    const booking = await db.collection('bookings').doc(id).get();
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
