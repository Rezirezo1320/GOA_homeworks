import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function ColorPicker() {
    const [color, setColor] = useState('')
    return (
        <>
        <div className={`w-100 h-100 flex flex-col  items-center justify-center`} style={color ? {backgroundColor: color} : {}}>
            <form className='flex flex-col gap-10 items-center justify-center border p-5' onSubmit={(e)=>{
                e.preventDefault()
                let color = e.target.color.value
                setColor(color)
            }}>
                <div className='flex flex-col gap-5'>
                    <input type="text" placeholder='choose  hex color' className='border bg-white' required name='color'/>
                    <button type='submit' className='border bg-gray-500 cursor-pointer text-white'>submit color</button>
                </div>
            </form>
            <button className='border bg-gray-500 cursor-pointer text-white' onClick={(e)=>{
                        let randomColor = '#'
                        let char = '0123456789abcdef'
                        for (let i = 0; i < 6; i++){
                            randomColor += char[Math.floor(Math.random() * char.length)]
                        }
                        console.log(randomColor)
                        setColor(randomColor)
                }}>random color</button>
        </div>
        </>
    )
}

export default ColorPicker 