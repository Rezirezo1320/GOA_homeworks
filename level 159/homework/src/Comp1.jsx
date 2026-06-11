import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Comp1() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if (email.includes("@") && password.length >= 6) {
            console.log("Valid Credentials")
            return
        }else {
            console.log("Invalid email or password")
            return
        }
    }, [email, password])
    return (
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setEmail(e.target.email.value)
                setPassword(e.target.pass.value)
            }}>
                <input type="text" name="email" className='border' />
                <input type="password" name="pass" className='border' />
                <button>Submit</button>
        </form>
        </>
    )
}

export default Comp1
