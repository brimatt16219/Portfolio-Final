import React from 'react'
import {SiGithub} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'

export default function Contact() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl p-10">Contact</h1>
      <div className="my-10 py-10">
        <ul className="text-4xl flex justify-center">
          <li className="p-8 mx-5">
            <a href="mailto:brimatt062495@gmail.com"><MdEmail /></a>
          </li>
          <li className="p-8 mx-5">
            <a href="https://github.com/brimatt16219" target="_blank"><SiGithub /></a>
          </li>
          <li className="p-8 mx-5">
            <a href="https://www.linkedin.com/in/ch4ng/" target="_blank" ><SiLinkedin /></a>
          </li>
          <li className="p-8 mx-5">
            <a href="tel:561-400-1305"><AiFillPhone /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
