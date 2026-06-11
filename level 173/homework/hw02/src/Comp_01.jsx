import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { count1Context } from './App'

function Comp_01() {
    const {count1, setCount1} = useContext(count1Context)
    return (
        <>
        <h1 className='text-center text-8xl'>Component 01</h1>
        <div>
            <h1 className='text-center text-8xl'>{count1}</h1>
            <button className='w-[600px] h-[100px] bg-gray-600 border cursor-pointer text-center text-7xl flex justify-self-center' onClick={() => setCount1(count1-1)}>Dicrease</button>
            <button className='w-[600px] h-[100px] bg-gray-600 border cursor-pointer text-center text-7xl flex justify-self-center' onClick={() => setCount1(count1+1)}>Increase</button>
        </div><br /><br /><br />
        </>
    )
}

export default Comp_01