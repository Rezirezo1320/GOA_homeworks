import { useState } from 'react'
import viteLogo from '/vite.svg'
import Description from './Descriptiojn.jsx'
// 4) შექმენით Greeting კომპონენტი.
// შექმენით form ერთი input ით
// --> მომხმარებელი წერს თავის სახელს, და ეკრანზე იმავე დროს გამოჩნდება შეტყობინება.
// --> ყოველ ახალ დაწერილ სიმბოლოზე ხელახლა უნდა დარენდერდეს - `Hello, {name}`
function App() {

  return (
    <>
      <Description/>
    </>
  )
}

export default App
