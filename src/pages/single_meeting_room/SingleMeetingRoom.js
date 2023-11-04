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

    {/* 
        ToDo
        Change date to human-readable format!
    */}

    useEffect(() => {
        axios.get(`${API}/meeting-rooms/${room.id}/bookings`) 
        .then(res => {
            setBookings(res.data)
        }).catch(err => {
            console.log('error retrieving Bookings:', err.message)
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
