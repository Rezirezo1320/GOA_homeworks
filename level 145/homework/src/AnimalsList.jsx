import { useState } from 'react'
import viteLogo from '/vite.svg'
import DogComponent from './DogComponent.jsx'
import CatComponent from './CatComponent.jsx'
function AnimalsList(props) {

    return (
        <>
        <div className='flex flex-col justify-center items-center gap-10 border p-5 w-100'>
            <DogComponent dogImg="/dog.png"  dogTitle="dog" dogButtonText="see dog"/><br/>
            <CatComponent catImg="/cat.png"  catTitle="cat" catButtonText="see cat"/>
        </div>
        </>
    )
}

export default AnimalsList