import React from 'react'
import MeetingForm from '../../components/meeting_form/MeetingForm'

import './newRoom.scss'


export default function NewRoom() {


    return (
        <div className='new-room'>
            <h1>Create a Room</h1>
            <MeetingForm  />
        </div>
    )
}
