import { useState } from 'react'
import viteLogo from '/vite.svg'

function Product(props) {

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
                <h1 className='text-5xl'>{props.title}</h1>
                <p>{props.price}</p>
                <img src={props.image}/>
            </div>
        </>
    )
}

export default Product