import { useState } from 'react'
import { use } from 'react'
// 6) შექმენით Mood კომპონენტი
// მომხმარებელს მოთხოვეთ შემოიყვანოს, თუ როგორ ხასიათზეა
// --> თუ happy მაშინ დაარენდერეთ `Your Mood: 😀`
// --> თუ sad მაშინ დაარენდერეთ `Your Mood: 🙁`
// --> თუ scared მაშინ დაარენდერეთ `Your Mood: 😰`
// --> თუ angryმაშინ დაარენდერეთ `Your Mood: 😡`
// ყველა სხვა შემთხვევაში 'Your Mood: Unknown🤷‍♂️`
function Mood() {
    const [name, setName] = useState("No Description")
    return (
        <>
        <form onSubmit={(e)=>{
            setName(
                e.target.text.value == 'happy' ? `Your Mood: 😀` : e.target.text.value == 'sad' ?  `Your Mood: 🙁` : e.target.text.value == 'scared' ? `Your Mood: 😰` : e.target.text.value == 'angry' ? `Your Mood: 😡` : 'Your Mood: Unknown🤷‍♂️'
            )
        }}>
            <input name="text" required/>
            <button type='submit'>Submit</button>
        </form>
        <p>Your Description: {name}</p>
        </>
    )
}

export default Mood