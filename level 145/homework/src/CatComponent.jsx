import { useState } from 'react'
import viteLogo from '/vite.svg'
function CatComponent(props) {

    return (
        <>
        <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
            <img src={props.catImg}/>
            <h1>{props.catTitle}</h1>
            <button>{props.catButtonText}</button>
        </div>
        </>
    )
}

export default CatComponent