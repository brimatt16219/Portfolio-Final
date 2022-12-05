import React from 'react'
import Window from './Window'
import { useState } from 'react'
import project1 from '../files/project1.pdf'
import project2 from '../files/project2.pdf'
import project3 from '../files/project3.pdf'

export default function Projects() {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  return (
    <div className="max-w-4xl py-11 my-11">
      
      
      <h1 className="p-8 text-4xl">Projects</h1>
      <p className="p-4">In one of the courses I have taken, Profressional Writing, I learned a lot about the aspects of technical communication.</p>
      <p className="p-4">I have done a total of 3 projects for this class, each one utilizes aspects of technical communication.</p>
      <p className="p-4">While designing this portfolio, I took into consideration all that I have learned in this class.</p>
      <p className="p-4">Here is a list of my projects.</p>
      <div>
        <ul>
        <li>
            <div className="w-full h-96 bg-gradient-to-r from-orange-300 to-red-300 dark:bg-gradient-to-r dark:from-zinc-700 dark:to-gray-700 rounded-xl my-12">
              <h1 className="text-xl p-8">Project 1: Instructions</h1>
              <p className="p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis massa dui, porttitor fringilla quam auctor nec. Curabitur elementum, ipsum quis aliquet ullamcorper, turpis lectus viverra turpis, ut mattis lorem orci sit amet justo. Nullam elementum bibendum lacus, non ullamcorper nulla interdum malesuada. Mauris justo sem, volutpat quis molestie non, auctor ut est. Pellentesque pharetra quis augue eu convallis. Aenean a scelerisque nunc. Donec nec bibendum elit. Maecenas ut tristique libero, sed molestie tellus. Donec sed diam metus. This is a change. See if this works</p>


              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800" onClick={() => setOpen(true)}>View Document</button>
              {open && <Window title="Project 1" path={project1} close={setOpen} />}
            </div>
          </li>
          <li>
            <div className="w-full h-96 bg-gradient-to-r from-orange-300 to-red-300 dark:bg-gradient-to-r dark:from-zinc-700 dark:to-gray-700 rounded-xl my-12">
              <h1 className="text-xl p-8">Project 2: Resume, Cover Letter, and Mini Interview</h1>
              <p className="p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis massa dui, porttitor fringilla quam auctor nec. Curabitur elementum, ipsum quis aliquet ullamcorper, turpis lectus viverra turpis, ut mattis lorem orci sit amet justo. Nullam elementum bibendum lacus, non ullamcorper nulla interdum malesuada. Mauris justo sem, volutpat quis molestie non, auctor ut est. Pellentesque pharetra quis augue eu convallis. Aenean a scelerisque nunc. Donec nec bibendum elit. Maecenas ut tristique libero, sed molestie tellus. Donec sed diam metus.</p>


              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800" onClick={() => setOpen2(true)}>View Document</button>
              {open2 && <Window title="Project 2" path={project2} close={setOpen2} />}
            </div>
          </li>
          <li>
            <div className="w-full h-96 bg-gradient-to-r from-orange-300 to-red-300 dark:bg-gradient-to-r dark:from-zinc-700 dark:to-gray-700 rounded-xl my-12">
              <h1 className="text-xl p-8">Project 3: Proposal</h1>
              <p className="p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis massa dui, porttitor fringilla quam auctor nec. Curabitur elementum, ipsum quis aliquet ullamcorper, turpis lectus viverra turpis, ut mattis lorem orci sit amet justo. Nullam elementum bibendum lacus, non ullamcorper nulla interdum malesuada. Mauris justo sem, volutpat quis molestie non, auctor ut est. Pellentesque pharetra quis augue eu convallis. Aenean a scelerisque nunc. Donec nec bibendum elit. Maecenas ut tristique libero, sed molestie tellus. Donec sed diam metus.</p>


              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800" onClick={() => setOpen3(true)}>View Document</button>
              {open3 && <Window title="Project 3" path={project3} close={setOpen3} />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
