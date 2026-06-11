import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toast from './Toast'
function FontSizeAdjuster() {
    const [elementFontSize, setElementFontSize] = useState()
    const [isError, setIsError] = useState(false)
    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            let number = Number(e.target.inp.value)
            if (number >= 10 && number <= 100){
                setIsError(false)
                setElementFontSize(number)
            }else {
                setIsError(true)
                setInterval(()=>{
                    setIsError(false)
                }, 3000)
            }
        }}>
            <input type="number" name="inp" />
            <button type='submit'>Submit</button>
            <p style={{fontSize: `${elementFontSize}px`}} >Text</p>
        </form>
        <div>
            {
                isError ? <Toast content="Error" expiresIn={3000} background="#f00"/> : ""
            }
        </div>
        </>
    )
}

export default FontSizeAdjuster