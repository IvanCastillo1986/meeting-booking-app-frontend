import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar'
import Home from './pages/home/Home';
import SingleMeetingRoom from './pages/single_meeting_room/SingleMeetingRoom'
import NewRoom from './pages/new_room/NewRoom'
import Bookings from './pages/bookings/Bookings'
import SingleBooking from './pages/single_booking/SingleBooking'
import NotFound from './pages/not_found/NotFound'

import './App.scss';



function App() {


  return (
    <div className="App">
      <Navbar />

        {/* 
          '/'
          <Home />
            <MeetingRooms />
            Shows all meetings
          
          '/meetingrooms/:id
          <SingleMeetingRoom />
          Shows one meeting room
              
          '/meetingrooms/new'
          <NewRoom />

          '/bookings'
          <Bookings />

          '/bookings/:id'
          <SingleBooking />
        */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="meetingrooms/:id" element={<SingleMeetingRoom />} />
        <Route path="meetingrooms/new" element={<NewRoom />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="bookings/:id" element={<SingleBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
