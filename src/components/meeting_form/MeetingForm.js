import React, { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import axios from 'axios'

import './meetingForm.scss'

const API = process.env.REACT_APP_API_URL


export default function MeetingForm() {

    const [meeting, setMeeting] = useState({
        name: '',
        capacity: '',
        floor: '',
    })
    const [showSuccessCreation, setShowSuccessCreation] = useState(0)


    function handleChange(e) {
        const {id, value} = e.target
        setMeeting({...meeting, [id]: value})
    }


    function handleSubmit(e) {
        e.preventDefault()

        try {
            axios.post(`${API}/meeting-rooms`, meeting)
            .then(() => {
                setMeeting({
                    name: '',
                    capacity: '',
                    floor: '',
                })
                setShowSuccessCreation(1)
            }).catch(err => {
                console.log(`Error in MeetingForm handleSubmit()`, err.message)
                setShowSuccessCreation(2)
            })
        } catch (err) {
            console.log('Error adding meeting room:', err.message)
        }
    }


    return (
        <>
            <form className='meeting-form' onSubmit={handleSubmit}>
                <li className='name'>
                    <label htmlFor="name">Room Name:</label>
                    <input type="text" id='name' value={meeting.name || ''} onChange={handleChange} required />
                </li>

                <li className='floor'>
                    <label htmlFor="floor">Floor:</label>
                    <input type="number" id='floor' value={meeting.floor || ''} onChange={handleChange} required />
                </li>
                
                <li className='capacity'>
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" id='capacity' value={meeting.capacity || ''} onChange={handleChange} required />
                </li>

                <button type="submit">Submit</button>
            </form>

            <Snackbar open={showSuccessCreation === 1} autoHideDuration={6000} 
            onClose={() => setShowSuccessCreation(0)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    You have created a meeting room
                </Alert>
            </Snackbar>

            <Snackbar open={showSuccessCreation === 2} autoHideDuration={6000}
            onClose={() => setShowSuccessCreation(0)}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    Error creating meeting room
                </Alert>
            </Snackbar>

            <div className='meeting-form__border-div' />
        </>
    )
}
