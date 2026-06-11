import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.jsx'
import Like from './Like.jsx'
import Counter from './Counter.jsx'
import Accordion from './Accordion.jsx'
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

// 
function App() {
  const [number, setNumber] =  useState(1)

  return (
    <>
      <div>
        <h1 className='text-5xl'>6.ეკრანზე გამოაჩინეთ რიცხვი 2; შექმენით ღილაკი. <br/>
        ამ ღილაკზე ყოველ დაჭერისას რიცხვი გაორმაგდეს.</h1>
        <div className='border-5'>
          <h1 className='text-4xl'>{number}</h1>
          <button className='w-20 h-10 bg-gray-400 border  cursor-pointer hover:bg-gray-300 transition' onClick={() =>{
            setNumber(number * 2)
          }}>Double</button>
        </div>
      </div> <br /> <br />
      <div>
        <h1 className='text-5xl'>7. შექმენით CaseChanger კომპონენტი. ეკრანზე გამოაჩინეთ რაიმე გრძელი ტექსტი + ღილაკი. <br />
          ღილაკზე დაჭერით თუ ტექსტი UPPERCASE არის უნდა და_lowercase_დეს და თუ lowercase არის უნდა და_UPPERCASE_დეს.</h1>
        <Card/>
      </div>
      <div>
          <h1 className='text-5xl'>8. შექმენით Like კომპონენტი. დაარენდერეთ ეკრანზე: <br />
                  -- თეთრი გული, თუ არ არის დალაიკებული(initial State) <br />
                  -- წითელი/გაფერადებული გული, როცა გულზე დავაწკაპებთ. <br />
                  უნდა შეიძლებოდეს დალაიქება&ლაიიქის მოხსნა <br />
                  გამოიყენეთ გულის svg + tailwind</h1>
          <Like/>
      </div>
      <div>
          <h1 className='text-5xl'>9. დახვეწეთ საკლასოზე გაკეთებული Counter კომპონენტი.
              -- როცა დადებითი რიცხვია, ეკრანზე იგი მწვანედ უნდა გამოჩნდეს
              -- როცა უარყოფითი რიცხვია, ეკრანზე იგი წითლად უნდა გამოჩნდეს
              -- როცა ნულია, ეკრანზე იგი თეთრად უნდა გამოჩნდეს
              -- დაამატეთ reset ღილაკი
              გამოიყენეთ useState და რათქმაუნდა Tailwind</h1>
          <Counter/>
      </div>
      <div>
          <h1 className='text-5xl'>10. შექმენით Accordion კომპონენტი. ეკრანზე უნდა იყოს ერთგვარი ღილაკი, რომლის შიგთავსიც იქნება:
          -- 'Open Accordion', თუ აკორდიონი დახურულია
          -- 'Close Accordion', თუ აკორდიონი ღიაა
          ღილაკზე დაჭერით, ეკრანზე(სადაც გინდათ) უნდა გამოჩნდეს div ტეგი რაიმე შიგთავსით/ტექსტით
              -აკორდიონი ღიაა, როცა ეს div ტეგი ჩანს
              -აკორდიონი დახურულია, როცა ეს div ტეგი არ ჩანს(ვგულისხმობ HTML სტრუქტურა საერთოდ არაა)</h1>
          <Accordion/>
      </div>
    </>
  )
}

export default App
