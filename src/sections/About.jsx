import React from 'react'
import {TbSchool} from 'react-icons/tb'
import {FiPackage} from 'react-icons/fi'
import {FiZap} from 'react-icons/fi'
import {SiJavascript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {CgCPlusPlus} from 'react-icons/cg'
import {SiC} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiVite} from 'react-icons/si'
import {SiThreedotjs} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'

import ucf from '../assets/ucf_logo.png'

export default function About({ mode }) {
  return (
      <div className="max-w-4xl py-11 my-11">
        <h1 className="text-4xl p-10">About me</h1>
        <p className="p-1">My name is Brian Chang. I'm currently a college student studying computer science.</p>
        <p className="p-1">I love programming and it has always been my passion to develop applications. It is my dream to work as a fullstack developer for a top company like Google.</p>
        <div className="justify-center gap-10">
        <div className={(mode ? "dark" : "") + " p-5"}>
            <div className="bg-gradient-to-r my-5 from-yellow-100 to-orange-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-cyan-900 w-full h-96 rounded-lg text-2xl" >
                <h1 className="text-1xl p-5 flex justify-center">
                  Education <TbSchool className="mx-2 my-0.5 text-1xl"/>
                </h1>
                <div className="flex">
                  <img src={ucf} alt="ucf logo" className="h-26 w-40" />
                  <div>
                    <p className="text-base pr-5 ">I am currently pursuing my bachelors degree in computer science at the <span className="font-bold"><a className="hover:underline text-blue-800 dark:text-blue-400 transition-colors duration-1000" href="https://www.ucf.edu/" target="_blank">University of Central Florida</a></span>.</p>
                    <p className="text-base pr-5 pt-3">I began my studies in the Fall of 2021 and expect to graduate by the Spring of 2024.</p>
                  </div>
                </div>
                <p className="text-base p-8">Throughout my journey, I have taken many important courses and learned about algorithmns, data structures, and number theory. Here are a list of key courses taken.</p>
                <ul className="text-base flex">
                  <li className="p-2 w-fit bg-white dark:bg-black rounded-lg mx-auto">
                    Computer Science 1 and 2
                  </li>
                  <li className="p-2 w-fit bg-white dark:bg-black rounded-lg mx-auto">
                    Discrete Structure 1 and 2
                  </li>
                  <li className="p-2 w-fit bg-white dark:bg-black rounded-lg mx-auto">
                    Object Oriented Programming
                  </li>
                  <li className="p-2 w-fit bg-white dark:bg-black rounded-lg mx-auto">
                    Professional Writing
                  </li>
                </ul>
            </div>
          </div>
          <div className={(mode ? "dark" : "") + " p-5"}>
            <div className="bg-gradient-to-r my-5 from-yellow-100 to-orange-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-cyan-900 w-full h-96 rounded-lg text-2xl" >
                <h1 className="text-1xl p-5 flex justify-center">
                  Experience <FiPackage className="mx-2 my-0.5 text-1xl"/>
                </h1>
                <ul>
                <li>
                      <h1 className="text-left text-lg p-4"><span className="font-bold"><a className="hover:underline text-blue-800 dark:text-blue-400 transition-colors duration-1000" href="https://evercoretechnologypartners.com/" target="_blank">Evercore Technology Partners</a></span> | Software Engineer Internship </h1>
                      <ul className="text-sm text-left pl-10 list-disc">
                      <li>
                          <p className="pb-1">Develop websites for clients at affordable prices using various frontend frameworks such as Laravel and React.</p>
                        </li>
                        <li>                        
                          <p className="pb-1">Collaborate with fellow junior developers under the mentorship of a senior developer to develop full stack projects.</p>
                        </li>
                        <li>                        
                          <p className="pb-1">Utilize backend development to configure databases in mySQL in order to store user data and authentification.</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1 className="text-left text-lg p-4"><span className="font-bold"><a className="hover:underline text-blue-800 dark:text-blue-400 transition-colors duration-1000" href="https://www.winndixie.com/" target="_blank">Winn Dixie</a></span> | Stocking Team Member </h1>
                      <ul className="text-sm text-left pl-10 list-disc">
                      <li>
                          <p className="pb-1">Charged with organizing shelves and supplying grocery shelves with packaged products.</p>
                        </li>
                        <li>                        
                          <p className="pb-1">Worked with the stock team in order to maximize the efficiency of maintaining the store's supplies.</p>
                        </li>
                        <li>                        
                          <p className="pb-1">Assisted customers by answering any questions about specific products and kept the store customer-friendly.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
            </div>
          </div>
          <div className={(mode ? "dark" : "") + " p-5"}>
            <div className="bg-gradient-to-r my-5 from-yellow-100 to-orange-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-cyan-900 w-full h-96 rounded-lg text-2xl" >
                <h1 className="text-1xl p-5 flex justify-center">
                  Skills <FiZap className="mx-2 my-0.5 text-1xl"/>
                </h1>
                <ul className="flex-wrap">
                  <h2 className="text-lg">Technical Programming Languages</h2>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiJavascript className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiPython className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiJava className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiC className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><CgCPlusPlus className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiHtml5 className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiCss3 className="inline-block mx-2 mt-1"/></h1>
                  </li>
                </ul>
                <ul className="flex-wrap">
                  <h2 className="text-lg pt-7">Developmental Frameworks</h2>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiReact className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiVite className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiThreedotjs className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiNextdotjs className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiTailwindcss className="inline-block mx-2 mt-1"/></h1>
                  </li>
                  <li className="p-7 inline-block">
                    <h1 className="flex"><SiBootstrap className="inline-block mx-2 mt-1"/></h1>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        
      </div>
  )
}
