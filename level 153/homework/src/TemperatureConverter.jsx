import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function TemperatureConverter() {
    const [selected, setSelected] = useState(null)
    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            e.target.temp.value = selected==1 ? Number(e.target.temp.value)*(9/5)+32 : selected == 2 ? (Number(e.target.temp.value)-32)*(5/9) : "You haven't choosed temp"
        }} className='border'>
            <input type="number" name="temp"/>
            <button type='button' onClick={(e)=>{
                setSelected(1)
            }} className='border bg-grey-300 cursor-pointer'>1. Celsius To Fahrenheit</button>
            <button type='button' onClick={(e)=>{
                setSelected(2)
            }} className='border bg-grey-300 cursor-pointer'>2. Fahrenheit To Celsius</button>
            <p>You have selected {selected}</p>
            <input type="submit" className='border bg-grey-300 cursor-pointer'/>
        </form>
        </>
    )
}

export default TemperatureConverter
