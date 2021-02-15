import React from 'react'
import icon from '../assets/icon.svg'

export default function Footer() {
    return (
        <div className="flex items-center p-8">
            <img src={icon} />
            <div className="ml-auto">
                <a href="https://doyin.xyz" className="font-bold custom-color text-xl">DevNinja</a>
            </div>
        </div>
    )
}
