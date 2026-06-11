import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Toast({content, expiresIn, background}) {
    const [hidden, setHidden] = useState(false)
    setTimeout(()=>{
        setHidden(true)
    }, expiresIn)
    return (
        <>
        <div className={`w-100 h-100 flex justify-center items-center text-center text-white text-6xl ${hidden ? 'hidden' : ''}`} style={{backgroundColor: background}}>
            <p>{content}</p>
        </div>
        </>
    )
}

export default Toast
