import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserStatus from './UserStatus'
import UserFriends from './UserFriends'
function UserCard({name, surname, age, gender, friendsList, isOnlineStatus}) {
    return (
        <>
        <div className='w-80 border bg-red-400 flex flex-col gap-10 p-10'>
            <h1 className='text-4xl'>{name + " " + surname}</h1>
            <h1 className='text-3xl'>{age}</h1>
            <h1 className='text-3xl'>{gender}</h1>
            <UserStatus userName={name+" "+surname} isOnline={isOnlineStatus}/>
            <UserFriends friends={friendsList}/>
        </div>
        </>
    )
}

export default UserCard