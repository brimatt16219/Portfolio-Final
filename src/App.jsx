import { useState } from 'react'
import SectionListing from './SectionListing';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navigator from './Navigator';
import Home from './sections/Home';
import {FiMoon, FiSun} from 'react-icons/fi'
import './Checkbox.css'


function App() {

  const [darkMode, setDarkMode] = useState(false);
  
  const [sections, setSections] = useState(
    [
      {
        id: 'home',
        title: 'Home',
        component: <Home mode={darkMode} />,
        darkMode: darkMode
      },
      {
        id: 'about',
        title: 'About',
        component: <About mode={darkMode} />
      },
      {
        id: 'projects',
        title: 'Projects',
        component: <Projects mode={darkMode} />
      },
      {
        id: 'contact',
        title: 'Contact',
        component: <Contact mode={darkMode} />
      }
    ]
  )

  
  return (
    <div className={(darkMode ? "dark" : "")}>
      <div className="w-full transition-colors duration-1000 p-0 border-0 bg-gradient-to-r from-orange-100 to-red-200 dark:bg-gradient-to-r dark:from-slate-800 dark:to-black dark:text-orange-100" >
        <Navigator listings={sections}/>
        <div className="flex justify-end switch">
                  <FiSun className="mx-5 text-2xl"/>
                  <label className="theme-switch">
                      <input type="checkbox" id="checkbox" onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                      <div className="slider round"></div>
                  </label>
                  <FiMoon className="mx-5 text-2xl"/>
                </div>
        <SectionListing listings={sections} />
      </div>
    </div>
    
  )
}

export default App
