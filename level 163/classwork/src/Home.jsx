import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './About'
import Category from './Category'
import Contact from './Contact'
function Home() {
    const [element, setElement] = useState("")

    return (
            element=="About" ? <About/> :
            element=="Home" ? <Home/> :
            element=="Category" ? <Category/> :
            element=="Contact" ? <Contact/> :
            <ul className='flex gap-5 justify-center items-center'>
            <li onClick={()=>setElement("Home")}>Home</li>
            <li onClick={()=>setElement("About")}>About</li>
            <li onClick={()=>setElement("Category")}>Category</li>
            <li onClick={()=>setElement("Contact")}>Contact</li>
            <h1>Home</h1>
            </ul>
    )
}

export default Home
