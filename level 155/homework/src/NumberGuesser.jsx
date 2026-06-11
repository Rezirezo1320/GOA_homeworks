import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toast from './Toast'
const num = Math.floor(Math.random() * 5)+1
function NumberGuesser() {
    const [guessed, setGuessed] = useState(false)
    const [guessResult, setGuessResult] = useState("")
    return (
        <>
        <form  onSubmit={(e)=>{
            e.preventDefault()
            console.log(num)
            let number = Number(e.target.inp.value)
            if (number > num){
                setGuessResult("Less")
                setGuessed(false)
            }else if (number < num){
                setGuessResult("More")
                setGuessed(false)
            }else {
                setGuessResult("Succes")
                setGuessed(true)
                setTimeout(()=>{
                    setGuessed(false)
                }, 3000)
            }
        }}>
            <input type="number" name='inp' />
            <button>Submit</button>
            <p>Result: {guessResult}</p>
        </form>
        <div>
            {
                guessed ?  <Toast content="Succes" expiresIn={3000} background="#0f0" /> : ""
            }
        </div>
        </>
    )
}

export default NumberGuesser
