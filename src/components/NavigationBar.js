import React from 'react'
import logo from '../Images/footer-logo_white-xs 1.png'
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className='max-w-full m-auto'>
        <nav>
            <div className='bg-transparent p-5 mt-3 grid grid-cols-8'>
               <div className='flex space-x-2 justify-start col-span-3'>
                    <img className='ml-6 cursor-pointer' src={logo} alt='Logo'/>
                    <p className='text-white mt-2 ml-2 font-Roboto font-semibold tracking-widest'>TRAVELx</p>
               </div>

                <div className='text-white space-x-8 mt-2 col-span-4 font-Montserrat font-semibold tracking-wider'>
                    <Link to='/destinations' className='mt-2' >Destinations</Link>
                    <Link to='/activities' className='mt-2'>Activities</Link>
                    <Link to='/about' className='mt-2'>About Us</Link>
                    <Link to='/contact' className='mt-2'>Contact</Link>
                </div>

                <div className='col-span-1 mt-2 cursor-pointer'>
                    <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="35" height="3.22581" rx="1.42857" fill="#FAFAFA"/>
                    <rect x="3.38718" y="9.67749" width="31.6129" height="3.22581" rx="1.42857" fill="#FAFAFA"/>
                    <rect x="6.36362" y="19.3547" width="28.6364" height="3.22581" rx="1.42857" fill="#FAFAFA"/>
                    </svg>
                </div>
            </div>
            
        </nav>
    </div>
  )
}
