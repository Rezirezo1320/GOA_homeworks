import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function Card({children, topMargin = false, marginAmount = 10}) {
    const margin = topMargin ? {marginTop:` ${marginAmount}px`} : "";
    return (        
        <>
        <div className={`w-50 h-100 bg-red-300 text-white border p-10 flex flex-col justify-center items-center gap-10 ${margin}`} style={margin}>
            {children}
        </div>
        </>
    )
}

export default Card
