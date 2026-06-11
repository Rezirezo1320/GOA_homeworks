import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function MyForm() {
    const [input, setInput] = useState("")
    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            let text = e.target.inp.value
            setInput(text)
        }}>
            <input type="text" name='inp'/>
            <input type="submit" />
        </form>
        <p>{input}</p>
        </>
    )
}

export default MyForm
