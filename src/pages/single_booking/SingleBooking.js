import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Button, Modal, Box, Typography, Alert, Snackbar } from '@mui/material'



const API = process.env.REACT_APP_API_URL


export default function SingleBooking() {

    /* 
        Displays the details of the booking and a button to cancel it. 
        Clicking cancel should prompt user to confirm that they want to cancel booking. 
        If they choose YES, it should cancel booking and if they choose NO it should do nothing. 
        Show a success message upon successful booking cancellation and an error message otherwise.
    */

    const [showModal, setShowModal] = useState(false)
    const [hideModal, setHideModal] = useState(true)
    const [showSuccessCancel, setShowSuccessCancel] = useState(0)
    const { state } = useLocation()
    const { booking } = state
    console.log(booking)

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`${API}/bookings/${id}`)
        .then(res => {
            console.log(res.data)
            setShowSuccessCancel(1)
            setHideModal(true)
        }).catch(err => {
            setShowSuccessCancel(2)
            setHideModal(true)
        })
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    }


    return (
        <div className='single-booking'>
            <h2>{booking.meeting_name}</h2>
            <p>Start: {booking.start_date}</p>
            <p>End: {booking.end_date}</p>
            <p>Floor: {booking.floor}</p>
            <Button variant="contained" onClick={() => {setShowModal(true); setHideModal(false)}}>
                Cancel Booking
            </Button>

            {!hideModal &&
            <Modal
                open={showModal === true}
                onClose={() => setShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to cancel this booking?
                    </Typography>
                    <Button variant="contained" onClick={() => handleDelete(booking.id)}>Yes</Button>
                    <Button variant="contained" onClick={() => setShowModal(false)}>No</Button>
                </Box>
            </Modal>
            }
            
            <Snackbar open={showSuccessCancel === 1} autoHideDuration={6000} 
            onClose={() => setShowSuccessCancel(0)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    You have cancelled this booking
                </Alert>
            </Snackbar>

            <Snackbar open={showSuccessCancel === 2} autoHideDuration={6000} 
            onClose={() => setShowSuccessCancel(0)}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    This booking does not exist
                </Alert>
            </Snackbar>
        </div>
    )
}
