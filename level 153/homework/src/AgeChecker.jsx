import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function AgeChecker () {
    const [isAdult, setIsAdult] = useState(false)
    const [submited, setSubmited] = useState(false)
    return (
        <>
        <div className='border'>
            <form onSubmit={(e)=>{
                e.preventDefault()
                let age = e.target.age.value
                age >= 18 ? setIsAdult(true) : setIsAdult(false)
                setSubmited(true)
                setInterval(()=>{
                    setSubmited(false)
                }, 3000)
            }}>
                <input type="number" name="age" required className='border'/>
                <button type='submit' className={`${submited ? 'hidden' : ''} border bg-gray-500 cursor-pointer text-white`}>Check</button>
            </form>
            <div className={`w-100 h-20 ${isAdult ? 'bg-green-500' : 'bg-red-500'} ${submited ? '' : 'hidden'}`}>
                <h1 className={`text-white text-5xl ${isAdult ? '' : 'hidden'}`}>Your allowed</h1>
                <h1 className={`text-white text-5xl ${isAdult ? 'hidden' : ''}`}>Your not allowed</h1>
            </div>
        </div>
        </>
    )
}

export default AgeChecker 