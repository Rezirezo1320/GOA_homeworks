import { useState } from 'react'
import { use } from 'react'
// 5) შექმენით Description კომპონენტი.
// შექმენით form ერთი textarea და submit ღილაკით, ასევე p ტეგი
// --> p ტეგში თავიდან უნდა ეწეროს No Description
// --> როცა მომხმარებელი ჩაწერს ტექსტს და დაასაბმითებს ამ p ტეგის მნიშვნელობა უნდა გახდეს `Your Description: {desc}`
function Description() {
    const [mood, setMood] = useState("")
    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            setMood( e.target.text.value === "happy" ? "Your Mood: 😀" :
            e.target.text.value === "sad" ? "Your Mood: 🙁" :
            e.target.text.value === "scared" ? "Your Mood: 😰" :
            e.target.text.value === "angry" ? "Your Mood: 😡" :
            "Your Mood: Unknown 🤷‍♂️")
        }}>
            <textarea name="text" required></textarea>
            <button type='submit'>Submit</button>
        </form>
        <p>{mood}</p>
        </>
    )
}

export default Description