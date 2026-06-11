import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function UserFriends({friends}) {
    console.log(friends)
    return (
        <>
        {
            friends.length > 0 ? friends.map((item, index) => {
                return <h1 className='text-3xl'>* {item.profilePic} {item.name} is {item.status}</h1>
            }) : <h1 className='text-3xl'>You Don't Have Friends Yet.</h1>
        }
        </>
    )
}

export default UserFriends
