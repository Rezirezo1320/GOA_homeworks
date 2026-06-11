import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toast from './Toast'
function Username() {
    const [toast, setToast] = useState(false)
    const [showToast, setShowToast] = useState(false)
    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            let text = e.target.inp.value
            setShowToast(true)
            if (!text){
                setToast(false)
            }else {
                let valid = true
                for (let i of text){
                    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(i)){
                        valid = false
                    }
                }
                if (valid){
                    setToast(true)
                }else {
                    setToast(false)
                }
                setShowToast(true)
                setTimeout(()=>{
                    setShowToast(false)
                }, 3000)
            }
        }}>
            <input type="text" name='inp'/>
            <button>Submit</button>
        </form>
        <div>
            {
                showToast ? (toast  ? <Toast content="Succes" expiresIn={3000} background="#0f0" /> : <Toast content="Error" background="#f00" expiresIn={3000}/>) : ""
            }
        </div>
        </>
    )
}

export default Username