import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className='flex flex-col gap-10 border-5'>
                <h1 id="counter" className={count > 0 ? 'text-green-500' : count == 0 ? 'text-white' : 'text-red-500'}>{count}</h1>
                <div className='flex gap-10'>
                    <button onClick={(e)=>{
                    setCount(count+1)
                    }}>Increase</button>
                    <button onClick={(e)=>{
                        setCount(0)
                    }}>Reset</button>
                    <button onClick={(e)=>{
                        setCount(count-1)
                    }}>Decrease</button>
                </div>
            </div>
        </>
    )
}

export default App
