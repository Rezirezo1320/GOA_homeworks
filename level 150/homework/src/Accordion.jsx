import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Accordion() {
    const [isOpen, setIsOpen] =  useState(false)

    return (
        <>
        <div className='border-5 '>
            <div className={`w-70 h-70 border ${isOpen ? "" : "hidden"}`}>
                <h1 className='text-3xl'>Accordion</h1>
            </div>
            <button onClick={(e)=>{
                setIsOpen(!isOpen)
            }}>{isOpen ? "Close Accordion" : "Open Accordion"}</button>
        </div>
        </>
    )
}

export default Accordion
