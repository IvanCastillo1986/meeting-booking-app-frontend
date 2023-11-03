import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss'


export default function Navbar() {


    return (
        <>
        <nav className='navbar'>
            <ul>
                <div className='logo'>
                    <li><Link to="/">
                        <span className='navbar__faulty-letter-one'>H</span>om<span className='navbar__faulty-letter-two'>e</span>
                    </Link></li>
                </div>
                

                <div className='navbar__links'>
                    <li><Link to='/'>Meeting Rooms</Link></li>
                    <li><Link to='bookings'>Bookings</Link></li>
                    <li><Link to='meetingrooms/new'>New Room</Link></li>
                </div>
            </ul>

            <div >
                <div className='navbar__sun' />
            </div>
        </nav>
        </>
    );
};
