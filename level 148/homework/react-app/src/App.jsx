import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserStatus from './UserStatus'
import UserFriends from './UserFriends'
import UserCard from './UserCard'
function App() {
  let myFriends = [
      { name: 'Jon', status: 'offline', profilePic: '😎'}, 
      { name: 'Bob', status: 'online', profilePic: '🤗' }
  ]
  return (
    <>
      <h1 className='text-8xl'>homework 5</h1><hr />
      <UserStatus userName={"aleksandre"} isOnline/>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <h1 className='text-8xl'>homework 6</h1><hr />
      <UserFriends friends={myFriends}/>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <h1 className='text-8xl'>homework 7</h1><hr />
      <UserCard name={"aleksandre"} surname={"dzukaevi"} age={17} gender={"man"} friendsList={myFriends} isOnlineStatus={true}/>
    </>
  )
}

export default App
