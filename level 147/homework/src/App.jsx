import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User'
import Container from './Container'
import Card from './Card'
function App() {

  return (
    <>
      <h1 className='text-6xl'>homework 2</h1>
      <hr />
      <User name="Aleksandre" bio="mentor"/>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <h1 className='text-6xl'>homework 3</h1>
      <hr />
      <Container>
        <h1 className='text-4xl'>inserted props</h1>
        <p className='text-3xl'>idk</p>
      </Container>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <h1 className='text-6xl'>homework 4</h1>
      <hr />
      <Card topMargin marginAmount={20}>
        <h1 className='text-4xl'>Aleksandre dzukaevi</h1>
        <p>age 17</p>
      </Card>
    </>
  )
}

export default App
