import React from 'react'
import { Carrot } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center px-5 py-5 mb-10 bg-blue-950'>
            <Link to="/"><h2 className='flex gap-2 text-lg items-center justify-center font-semibold tracking-wide hover:scale-110 transition'>Gifify <Carrot size={25} /></h2></Link>
            <ul className='list-none flex items-center justify-center gap-5'>
                <li className='hover:underline hover:scale-110 transition'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition'>
                    <Link to="/saved">Saved</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar