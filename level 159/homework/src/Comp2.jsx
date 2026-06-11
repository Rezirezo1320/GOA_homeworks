import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Comp2() {

    const [count, setCount] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(()=>{
        if (count > 10 && isActive === true ) {
            console.log("High activity")
            return
        }else if (count <= 10 && isActive === false) {
            console.log("Low activity")
            return
        }else {
            console.log("Normal state")
        }
    }, [count, isActive])
    return (
        <>
            <button onClick={(e)=>{
                setCount(count+1)
            }}>Increase</button><br /><br />
            <button onClick={(e)=>{
                setCount(count-1)
            }}>Decrease</button><br /><br />
            <button onClick={(e)=>{
                setIsActive(!isActive)
            }}>Set Active</button>
            <h1>{count}</h1>
        </>
    )
}

export default Comp2
