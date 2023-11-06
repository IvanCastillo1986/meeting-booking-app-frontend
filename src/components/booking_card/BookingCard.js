import React from 'react'
import { Link } from 'react-router-dom'
import { convertIsoDateToReadableStr } from '../../helper/convertIsoDateToReadable'

import './bookingCard.scss'


export default function BookingCard({ booking }) {


    return (
        <Link 
            className='booking-card'
            to={`/bookings/${booking.id}`}
            state={{ booking }}
        >
            <h2>{booking.meeting_name}</h2>
            <p>Start: {convertIsoDateToReadableStr(booking.start_date)}</p>
            <p>End: {convertIsoDateToReadableStr(booking.end_date)}</p>
        </Link>
    )
}
