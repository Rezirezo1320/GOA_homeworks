import { useState } from 'react'
import viteLogo from '/vite.svg'
function DragonComponent(props) {

    return (
        <>
        <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
            <img src={props.dragonImg}/>
            <h1>{props.dragonTitle}</h1>
            <button>{props.dragonButtonText}</button>
        </div>
        </>
    )
}

export default DragonComponent