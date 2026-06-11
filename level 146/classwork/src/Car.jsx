import { useState } from 'react'
import viteLogo from '/vite.svg'

function Car(props) {

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
                <img src={props.src}/>
                <h1 className='text-5xl'>{props.title}</h1>
                <p>{props.price}</p>
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default Car