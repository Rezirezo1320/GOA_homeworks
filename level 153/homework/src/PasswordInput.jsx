import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function PasswordInput() {
    const [hidden, setHidden] = useState(false)
    return (
        <>
        <form className='border w-100 h-100' onSubmit={(e) =>{ 
                e.preventDefault()
            }}>
            <input type={hidden ? "password" : "text"} placeholder='enter your passowrd'/>
            <button onClick={(e)=>{
                setHidden(!hidden)
            }} className='border bg-grey-300 cursor-pointer' type='button'>{hidden ? "show" : "hide"}</button>
        </form>
        </>
    )
}

export default PasswordInput