import React from 'react'
import { Link } from 'react-router-dom'

import './roomCard.scss'


export default function RoomCard({ room }) {


    return (
        <Link 
            className='room-card'
            to={`meetingrooms/${room.id}`}
            state={{room}}
        >
            <h2>{room.name}</h2>
            <p>Capacity: {room.capacity}</p>
            <p>Floor: {room.floor}</p>
        </Link>
    )
}
