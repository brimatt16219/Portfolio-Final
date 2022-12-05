import React, { useState } from 'react'




export default function Window({ title, path, close }) {

    return (
        <div className="bg-teal-50 w-screen h-screen top-0 left-0 m-0 p-0 z-40 fixed bg-opacity-10" > 
            <h1 className="text-center bg-orange-100 p-5 text-lg dark:bg-black">{title}</h1>
            <iframe className="h-3/4 inline w-3/4" src={path} height="100%" weight="50%" frameBorder="0" />
            <div className="">
                <button className="py-4" onClick={() => close(false)}><span className="text-lg p-5 bg-yellow-100 text-black rounded-lg dark:bg-slate-800 dark:text-orange-100">Close</span></button>
            </div>
        </div>
    )
}
