import React from 'react'
import { Link } from 'react-router-dom'
import { convertIsoDateToReadableStr } from '../../helper/convertIsoDateToReadable'

import './bookingAndMeetingCard.scss'


export default function BookingAndMeetingCard({ booking }) {


    return (
        <Link 
            className='booking-and-meeting-card'
            to={`/bookings/${booking.id}`}
            state={{ booking }}
        >
            <h2>{booking.meeting_name}</h2>
            <p>{booking.name}</p>
            <p>Start: {convertIsoDateToReadableStr(booking.start_date)}</p>
            <p>End: {convertIsoDateToReadableStr(booking.end_date)}</p>
            <p>Floor: {booking.floor}</p>
        </Link>
    )
}
