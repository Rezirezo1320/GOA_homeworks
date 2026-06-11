import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Comp3() {
    const [temperature, setTemperature] = useState(null)
    const [city, setCity] = useState("")
    
    useEffect(()=>{
        if (temperature > 35 && city.length >= 3 ){
            console.log("Heat Alert in", city)
            return
        }else if (temperature < 5){
            console.log("Cold Alert in", city)
            return
        }else {
            console.log("Weather normal")
        }
    }, [temperature, city])
    return (
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setTemperature(Number(e.target.temp.value))
                setCity(e.target.city.value)
            }}>
                <input type="number" name="temp" />
                <input type="text" name="city" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Comp3