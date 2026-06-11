import { useState } from 'react'
import { use } from 'react'
// 4) შექმენით Greeting კომპონენტი.
// შექმენით form ერთი input ით
// --> მომხმარებელი წერს თავის სახელს, და ეკრანზე იმავე დროს გამოჩნდება შეტყობინება.
// --> ყოველ ახალ დაწერილ სიმბოლოზე ხელახლა უნდა დარენდერდეს - `Hello, {name}`
function Greeting() {
    const [name, setName] = useState("")
    return (
        <>
        <form>
            <input type="text" placeholder='name' onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <h1>Hello , {name}</h1>
        </form>
        </>
    )
}

export default Greeting