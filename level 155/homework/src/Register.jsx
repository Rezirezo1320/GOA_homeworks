import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toast from './Toast'
function Register() {
    const [value, setValue] = useState({
        name: "",
        pass: "",
        confirmpass: ""
    })
    const [isErrorChar, setIsErrorChar] = useState(false)
    const [isErrorPass, setIsErrorPass] = useState(false)
    const [isSucces, setIsSucces] = useState(false)
    return (
        <>
        <form className='flex flex-col justify-center items-center'
        onSubmit={(e)=>{
            e.preventDefault()
            let name = e.target.name.value
            let pass = e.target.pass.value
            let confirmpass = e.target.confirmpass.value
            if (name.length >= 10 && pass === confirmpass){
                setIsSucces(true)
            }
            else if (name.length < 10){
                setIsErrorChar(true)
                setTimeout(()=>{
                    setIsErrorChar(false)
                }, 2000)
                return
            }
            else if (pass != confirmpass){
                setIsErrorPass(true)
                setTimeout(()=>{
                    setIsErrorPass(false)
                }, 3000)
                return
            }
        }}>
            <label htmlFor="name">Enter your name</label><br />
            <input type="text" name="name" id="name"className="border"/>
            <p className={`text-red-700 ${isErrorChar ? '' : 'hidden'}`}>name must have at least 10 chars</p><br /><br />
            <label htmlFor="pass">Enter your password</label><br />
            <input type="password" name="pass" id="pass"className="border"/><br /><br />
            <label htmlFor="confirmpass">Confirm your password</label><br />
            <input type="password" name="confirmpass" id="confirmpass"className="border"/><br />
            <input type="submit" className='borderr bg-gray-300 cursor-pointer p-3'/>
        </form>
        {
            isErrorPass ? <Toast content="Error" expiresIn={3000} background="#f00" /> : ''
        }
        {
            isSucces ? <Toast content="Succes" expiresIn={3000} background="#0f0" /> : ''
        }
        </>
    )
}

export default Register
