import React, { useState, useEffect } from 'react'
import axios from 'axios'

import RoomCard from '../room_card/RoomCard';
import SearchBar from '../search_bar/SearchBar';

import './meetingRooms.scss';
const API = process.env.REACT_APP_API_URL;


export default function MeetingRooms() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        axios.get(`${API}/meeting-rooms`)
        .then(res => {
            setRooms(res.data)
        })
    }, [])

    
    return (
        <div className='meeting-rooms'>
            {/* 
            ToDo
            Create search function to filter rooms

            <p>Find available rooms:</p>
            <SearchBar />
            */}


            {rooms.map(room => {
                return (
                    <RoomCard key={room.id} room={room} />
                )
            })}
        </div>
    )
}
