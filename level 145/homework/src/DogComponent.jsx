import { useState } from 'react'
import viteLogo from '/vite.svg'
function DogComponent(props) {

    return (
        <>
        <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
            <img src={props.dogImg}/>
            <h1>{props.dogTitle}</h1>
            <button>{props.dogButtonText}</button>
        </div>
        </>
    )
}

export default DogComponent