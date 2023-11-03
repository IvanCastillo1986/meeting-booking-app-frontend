import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import BookingForm from '../../components/booking_form/BookingForm'
import BookingCard from '../../components/booking_card/BookingCard'

import './singleMeetingRoom.scss'

const API = process.env.REACT_APP_API_URL;


export default function SingleMeetingRoom() {

    const [bookings, setBookings] = useState({})
    const { state } = useLocation()
    const { room } = state
    console.log(room)

    {/* 
        ToDo
        Display a form and all its future bookings
        Display a form to book the meeting room. The form must include Meeting Name, Start Date, End Date,
        and Attendees input fields and a Submit button. The Attendees input should be optional and all others
        required. Show a success message upon successful booking creation and an error message otherwise.

        Should also display a list of all existing future bookings and when you click on one of the bookings
        of the list it should take the user to that booking's page/view.
    */}
    // Make API call to api bookings where bookings.meeting_room_id = meeting_room.id
    useEffect(() => {
        axios.get(`${API}/bookings?meetingRoomId=${room.id}`) // /bookings?meetingRoomId=3
        .then(res => {
            console.log(res.data)
            setBookings(res.data)
        })
    }, [])


    return (
        <div className='single-meeting-room'>
            <div className='meeting-div'><h2>{room.name}</h2> <p>Capacity: {room.capacity}</p> <p>Floor: {room.floor}</p></div>
            <div className='bottom-border' />
            <BookingForm />
            <div className='bottom-border' />
            {Object.keys(bookings).length !== 0 &&
                bookings.map(booking => {
                    return <BookingCard key={booking.id} booking={booking} />
                })
            }

        </div>
    )
}
