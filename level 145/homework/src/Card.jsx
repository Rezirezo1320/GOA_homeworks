import { useState } from 'react'
import viteLogo from '/vite.svg'

function Card(props) {

    return (
        <>
        <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        </>
    )
}

export default Card