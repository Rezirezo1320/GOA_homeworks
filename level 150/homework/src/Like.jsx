import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// 1)რა არის state React ში და რითი განსხვავდება იგი props გან?
// state არის მდგომარეობა, statefull როცა საიტს აქვს ფუნქციონალი stateless როცა არ ააქვს, props რა შუაშია იდკ

// 2) რა არის useState? რატომ ვიყენებთ/ რა პრობლემას აგვარებს?
// ეს არის hook, რომელიც გვეხმარება ფუნქციონალის დამატებაშ,  აქამდე არ შეგვეძლო dom ის შშეცვლა რადგან საიტი ახლიდან არ რენდერდებოდა, მაგრამ useState ში თუ პირველ ცვლადს მაგალითად count ს შევცვლით მეორე ფუნქციით მაგალითად setCount, მაშინ იგი დარენდერდება და შეიცვლება

// 3) რას აბრუნებს useState ფუნქცია?
// იგი აბრუნებს სიას, პირველი ელემენტი  არის ცვლადი მეორე კი ფუნქცია რომელიც ცვლის ამ ცვლადს

// 4) რატომ არ უნდა შევცვალოთ state პირდაპირ? (მაგ. count++)
// რადგან ეგრე გამოდის რომ უკვე ცვლადს ვცვლით და დარენდერება არ მოხდება, უნდა გამოვიყენოთ მეორე ფუნქცია და ++ ის მაგივრად + 1 დავწეროთ,

// 5) რა ემართება კომპონენტს, როცა state იცვლება?
// იგი რენდერდება

function Like() {
    const [heart, setHeart] =  useState("/liked.png")

    return (
        <div className='border-5'>
            <img src={heart} onClick={() => {
            heart=="/liked.png"  ? setHeart("/unlike.png") : setHeart("/liked.png")
            }} className='w-30 cursor-pointer'/>
        </div>
    )
}

export default Like
