import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BookingAndMeetingCard from '../../components/booking_and_meeting_card/BookingAndMeetingCard'

import './bookings.scss'

const API = process.env.REACT_APP_API_URL


export default function Bookings() {

    const [bookings, setBookings] = useState([])

    /* 
        Displays a list of all future bookings for all meeting rooms and when you click in one of the 
        bookings of the list it should take the user to that booking's page/view

        ToDo
        make call to retrieve bookings AND meetings
    */

    useEffect(() => {
        axios.get(`${API}/bookings`)
        .then(res => {
            console.log(res.data)
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
