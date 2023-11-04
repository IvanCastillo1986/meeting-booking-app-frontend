import React from 'react'
import { Link } from 'react-router-dom'

import './bookingAndMeetingCard.scss'


export default function BookingAndMeetingCard({ booking }) {


    return (
        <Link 
            className='booking-card'
            to={`/bookings/${booking.id}`}
            state={{ booking }}
        >
            <h2>{booking.meeting_name}</h2>
            <p>{booking.name}</p>
            <p>Start: {booking.start_date}</p>
            <p>End: {booking.end_date}</p>
            <p>Floor: {booking.floor}</p>
        </Link>
    )
}
