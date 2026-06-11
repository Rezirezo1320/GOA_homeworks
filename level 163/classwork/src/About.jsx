import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Category from './Category'
import Contact from './Contact'
function About() {
    const [element, setElement] = useState("")
  return (
    element=="About" ? <About/> :
    element=="Home" ? <Home/> :
    element=="Category" ? <Category/> :
    element=="Contact" ? <Contact/> :
    <ul>
        <li onClick={()=>setElement("Home")}>Home</li>
        <li onClick={()=>setElement("About")}>About</li>
        <li onClick={()=>setElement("Category")}>Category</li>
        <li onClick={()=>setElement("Contact")}>Contact</li>
        <h1>About</h1>
    </ul>

  )
}

export default About
