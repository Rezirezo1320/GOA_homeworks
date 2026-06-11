import { useState } from 'react'
import viteLogo from '/vite.svg'
import Card from './Card.jsx'
import DogComponent from './DogComponent.jsx'
import CatComponent from './CatComponent.jsx'
import AnimalsList from './AnimalsList.jsx'
import DragonComponent from './DragonComponent.jsx'
function App() {

  return (
    <>
      <h1 className='text-7xl'>homework 2</h1>
      <Card title="Card"  text="this is card"/><br/>
      <h1 className='text-7xl'>homework 3</h1>
      <DogComponent dogImg="/dog.png"  dogTitle="dog" dogButtonText="see dog"/><br/>
      <h1 className='text-7xl'>homework 4</h1>
      <CatComponent catImg="/cat.png"  catTitle="cat" catButtonText="see cat"/><br/>
      <h1 className='text-7xl'>homework 5</h1>
      <DragonComponent dragonImg="/dragon.png"  dragonTitle="dragon" dragonButtonText="see dragon"/><br/>
      <h1 className='text-7xl'>homework 6</h1>
      <AnimalsList/>
    </>
  )
}

export default App