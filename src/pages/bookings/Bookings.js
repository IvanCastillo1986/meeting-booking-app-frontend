import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BookingAndMeetingCard from '../../components/booking_and_meeting_card/BookingAndMeetingCard'

import './bookings.scss'

const API = process.env.REACT_APP_API_URL


export default function Bookings() {

    const [bookings, setBookings] = useState([])


    useEffect(() => {
        axios.get(`${API}/bookings?plusMeetingRoomData=true`)
        .then(res => {
            setBookings(res.data)
        })
    }, [])


    return (
        <div className='bookings'>
            {Object.keys(bookings).length !== 0 &&
                bookings.map(bookingAndMeeting => {
                    return <BookingAndMeetingCard key={bookingAndMeeting.id} booking={bookingAndMeeting} />
                })
            }
        </div>
    )
}
