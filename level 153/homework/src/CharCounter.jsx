import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function CharCounter() {
    const [characterCount, setCharacterCount] = useState(0)
    const [value, setValue] = useState("")
    const [readOnly, setReadOnly] = useState(false)
    return (
        <>
            <div className='border'>
                <textarea name="" id="" readOnly={readOnly} value={value} onChange={(e)=>{
                    setCharacterCount(e.target.value.length)
                    setValue(e.target.value)
                    setReadOnly(characterCount >= 100)
                }}></textarea>
                <button className='border bg-grey-300 cursor-pointer' onClick={() => {
                    setValue("")
                    setReadOnly(false)
                    setCharacterCount(0)
                    
                }
                }>Reset</button>
                <h1>{characterCount >= 100 ? `You Reached Character Limit` : `Total Characters: ${characterCount}`}</h1>
            </div>
        </>
    )
}

export default CharCounter
