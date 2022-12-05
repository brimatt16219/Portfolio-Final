import React from 'react'

import {useState} from 'react'
import './Checkbox.css'


export default function Navigator({ listings }) {

  const[darkMode, setDarkMode] = useState(false)

  return (
    <nav>
        <ul className="flex justify-end fixed z-10">
            {listings.map(listing => 
                <li key={listing.id} className="">
                    <a className="inline-block p-8 " href={"#" + listing.id} >{listing.title}</a>
                </li>
            )}
        </ul>
    </nav>
  )
}
