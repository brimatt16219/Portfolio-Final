import React from 'react'
import Window from './Window'
import { useState } from 'react'
import project1 from '../files/project1.pdf'
import project2 from '../files/project2.pdf'
import project3 from '../files/project3.pdf'
import Video from './Video'


export default function Projects() {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [openVid, setOpenVid] = useState(false)

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
              <p className="p-6">In this assignment, I learned about the importance of organization and structuring of elements within a document. I had to take in mind how a reader reads and follows along a document. This means that the order and design of the instructions had to be careefully considered.</p>


              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800" onClick={() => setOpen(true)}>View Document</button>
              
              {open && <Window title="Project 1" path={project1} close={setOpen} />}
              
            </div>
          </li>
          <li>
            <div className="w-full h-96 bg-gradient-to-r from-orange-300 to-red-300 dark:bg-gradient-to-r dark:from-zinc-700 dark:to-gray-700 rounded-xl my-12">
              <h1 className="text-xl p-8">Project 2: Resume, Cover Letter, and Mini Interview</h1>
              <p className="p-6">This assignment was about professionalism in the workplace, and was more relevant to applications and interviews. During the time of making this project, I embarked on my job hunt for my first internship. Thus, this project was a greate opportunity to learn about the importance of font-size and color within documents. This assignment also included a mock mini interview. I learned about professionalism and the interview process and eventually landed my first internship!</p>


              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800 m-5" onClick={() => setOpen2(true)}>View Document</button>
              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800 m-5" onClick={() => setOpenVid(true)}>View Video</button>
              
              {open2 && <Window title="Project 2" path={project2} close={setOpen2} />}
              {openVid && <Video close={setOpenVid} title="Video"/>}
            </div>
          </li>
          <li>
            <div className="w-full h-96 bg-gradient-to-r from-orange-300 to-red-300 dark:bg-gradient-to-r dark:from-zinc-700 dark:to-gray-700 rounded-xl my-12 z-10">
              <h1 className="text-xl p-8">Project 3: Proposal</h1>
              <p className="p-6">This project was a group assignment that had us write written proposals given a certain topic. This would be the only group-based project in the entire course, thus the importance of teamwork was paramount. This meant that as a team, we had to communicate our ideas and execute them efficiently. In regards to the assignment, formatting and research was the most practiced skill that had us doing bibliographies and formatting documents. 
              </p>
              <div className="h-12">
              </div>
              <button className="bg-yellow-100 p-5 rounded-lg dark:bg-slate-800 z-50" onClick={() => setOpen3(true)}>View Document</button>
              {open3 && <Window title="Project 3" path={project3} close={setOpen3} />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
