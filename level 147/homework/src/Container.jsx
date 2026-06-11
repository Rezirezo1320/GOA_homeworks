import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function Container({children}) {

    return (
        <>
        <div>
            <h1 className='text-5xl'>Already was in component</h1>
            <p className='text-3xl'>idk text</p>
            <h1 className='text-5xl'>Props from another component</h1>
            {children}
        </div>
        </>
    )
}

export default Container
