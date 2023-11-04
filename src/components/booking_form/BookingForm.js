import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Alert, Snackbar } from '@mui/material'
import axios from 'axios'


import './bookingForm.scss'

const API = process.env.REACT_APP_API_URL


export default function BookingForm() {
    
    const [showBookSuccess, setShowBookSuccess] = useState(false)
    const [showBookError, setShowBookError] = useState(false)
    const { state } = useLocation()
    const { room } = state

    const [booking, setBooking] = useState({
        meeting_name: '',
        meeting_room_id: room.id,
        start_date: '',
        end_date: '',
        attendees: ''
    })


    function handleChange(e) {
        const {id, value} = e.target
        setBooking({...booking, [id]: value})
    }


    function handleSubmit(e) {
        e.preventDefault()
        setShowBookSuccess(false)
        setShowBookError(false)

        try {
            axios.post(`${API}/bookings`, booking)
            .then(() => {
                setBooking({
                    meeting_name: '',
                    start_date: '',
                    end_date: '',
                    attendees: ''
                })
                setShowBookSuccess(true)
                console.log('successfully booked')
            }).catch(err => {
                setShowBookError(true)
                console.log(`Error in BookingForm handleSubmit()`, err)
            })

        } catch (err) {
            console.log('Error adding game:', err)
        }
    }
    


    return (
        <>
            <form className='booking-form' onSubmit={handleSubmit}>
                <li className='name'>
                    <label htmlFor="meeting_name">Meeting Name:</label>
                    <input type="text" id='meeting_name' value={booking.meeting_name || ''} onChange={handleChange} required />
                </li>

                <li className='start_date'>
                    <label htmlFor="start_date">Start:</label>
                    <input type="text" id='start_date' value={booking.start_date || ''} onChange={handleChange} required />
                </li>
                
                <li className='end_date'>
                    <label htmlFor="end_date">End:</label>
                    <input type="text" id='end_date' value={booking.end_date || ''} onChange={handleChange} required />
                </li>

                <li className='attendees'>
                    <label htmlFor="attendees">Attendees:</label>
                    <input type="text" id='attendees' value={booking.attendees || ''} onChange={handleChange} />
                </li>

                <button type="submit">Submit</button>
            </form>

            <Snackbar open={showBookSuccess} autoHideDuration={6000} 
                onClose={() => setShowBookSuccess(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    You have booked a meeting
                </Alert>
            </Snackbar>

            <Snackbar open={showBookError} autoHideDuration={6000} 
                onClose={() => setShowBookError(false)}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    Error booking a meeting
                </Alert>
            </Snackbar>
        </>
    )
}
