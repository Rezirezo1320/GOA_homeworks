import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function User({name, bio = "No bio", age = 18}) {

    return (
        <>
            <div className='w-100 border p-10'>
                <h1 className='text-6xl'>{name}</h1>
                <h1 className='text-4xl'>{bio}</h1>
                <p className='text-2xl'>{age}</p>
            </div>
        </>
    )
}

export default User
