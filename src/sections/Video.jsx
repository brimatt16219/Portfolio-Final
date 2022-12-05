import React, { useState } from 'react'
import project2vid from '../files/project2vid.mp4'



export default function Video({ close, title }) {

    return (
        <div className="bg-teal-50 w-screen h-screen top-0 left-0 m-0 p-0 z-40 fixed bg-opacity-10" > 
            <h1 className="text-center bg-orange-100 p-5 text-lg dark:bg-black">{title}</h1>
            <video className="h-3/4 inline w-3/4" src={project2vid} controls></video>
            <div className="">
                <button className="py-4" onClick={() => close(false)}><span className="text-lg p-5 bg-yellow-100 text-black rounded-lg dark:bg-slate-800 dark:text-orange-100">Close</span></button>
            </div>
        </div>
    )
}
