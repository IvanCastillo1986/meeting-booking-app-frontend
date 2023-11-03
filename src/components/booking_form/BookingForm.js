import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


import './bookingForm.scss'

const API = process.env.REACT_APP_API_URL

{/* 
    ToDo
    Display a form and all its future bookings.
    
    Display a form to book the booking room. The form must include booking meeting_name, Start Date, End Date,
    and Attendees input fields and a Submit button. The Attendees input should be optional and all others
    required. Show a success message upon successful booking creation and an error message otherwise.

    Should also display a list of all existing future bookings and when you click on one of the bookings
    of the list it should take the user to that booking's page/view.
*/}

export default function GameForm({ method, oldGame }) {
    
    const { state } = useLocation()
    const { room } = state
    console.log(room)

    const [booking, setBooking] = useState({
        meeting_name: '',
        start: '',
        end: '',
        attendees: ''
    })


    function handleChange(e) {
        const {id, value} = e.target
        setBooking({...booking, [id]: value})
    }


    function handleSubmit(e) {
        e.preventDefault()

        try {
            axios.post(`${API}/booking-rooms`, booking)
            .then(() => {
                setBooking({
                    meeting_name: '',
                    start: '',
                    end: '',
                    attendees: '',
                    meeting_room_id: ''
                })
            }).catch(err => {
                console.log(`Error in MeetingForm handleSubmit()`, err)
            })

        } catch (err) {
            console.log('Error adding game:', err)
        }
    }

    // function editGame(e) {
    //     e.preventDefault()

    //     axios.put(`${API}/games/${game.id}`, game)
    //     .then((res) => {
    //         console.log(res)
    //         navigate(-1)
    //     }).catch(err => {
    //         console.log(`Error in GameForm editGame()`, err)
    //     })
    // }
    


    return (
        <>
            <form className='booking-form' onSubmit={handleSubmit}>
                <li className='name'>
                    <label htmlFor="meeting_name">Meeting Name:</label>
                    <input type="text" id='meeting_name' value={booking.meeting_name || ''} onChange={handleChange} required />
                </li>

                <li className='start'>
                    <label htmlFor="start">Start:</label>
                    <input type="text" id='start' value={booking.start || ''} onChange={handleChange} required />
                </li>
                
                <li className='end'>
                    <label htmlFor="end">End:</label>
                    <input type="text" id='end' value={booking.end || ''} onChange={handleChange} required />
                </li>

                <li className='attendees'>
                    <label htmlFor="attendees">Attendees:</label>
                    <input type="text" id='attendees' value={booking.attendees || ''} onChange={handleChange} />
                </li>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
