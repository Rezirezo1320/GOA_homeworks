import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function UserStatus({userName, isOnline = false}) {

    return (
        <>
        <h1 className='text-3xl'>{isOnline ? `${userName} is Online` : `${userName} is Offline`}</h1>
        </>
    )
}

export default UserStatus
