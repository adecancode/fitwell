import React from 'react'
import icon from '../assets/icon.svg'

export default function Navbar() {
    return (
        <div className="flex items-center p-8 navbar">
            <img src={icon} />
            <div className="ml-auto">
                <a className="mr-6 font-medium text-gray-800">Sign Up</a>
                <a className="py-3 px-8 custom-bg text-white rounded-sm font-semibold login-btn">Login</a>
            </div>
        </div>
    )
}
