import { use, useState, useEffect, createContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Hero'
import Item from './Item'
import NewArrivals from './NewArrivals'
import BrowseByDressStyle from './BrowseByDressStyle'
import OurHappyCostumers from './OurHappyCostumers'
import RatingAndReviwevs from './RatingAndReviwevs'
import Footer from './Footer'



export const itemContext = createContext()


function App() {
  const [chosenItem, setChosenItem] = useState([])
  const [info, setInfo] = useState([])
  const [add, setAdd] = useState(true)

  async function getData() {
      let response = await fetch("/data2.json")
      let data = await response.json()
      setInfo(data)
  }

  useEffect(()=>{
      getData()
  }, [])

  return (
    <>
    <itemContext.Provider value={{chosenItem, setChosenItem}}>
    <BrowserRouter>
      <div>
        <div className={`h-[38px] w-full bg-black flex justify-center items-center ${add ? '' : 'hidden'}`}>
          <p className='text-white text-[14px] font-[400] opacity-[80%] p-1'>Sign up and get 20% off to your first order. </p><span className='font-[500] underline text-white text-[14px] font-[400]  opacity-[95%] '>Sign Up Now</span>
          <i className="fa-solid fa-xmark text-white absolute right-98 cursor-pointer" onClick={() => {
            setAdd(false)
          }}></i>
        </div>
        <div className='w-full flex items-center justify-center gap-[40px] py-[25px] px-[20px] max-md:justify-between'>
          <div className='flex items-center gap-[20px]'>
            <div className='hidden max-md:block'>
              <i className="fa-solid fa-bars text-[24px]"></i>
            </div>
            <Link className='font-[900] text-[32px]' to="/">SHOP.CO</Link>
          </div>
          <nav className='max-lg:hidden'>
            <ul className='flex gap-[24px]'>
              <Link to="/shop">Shop <i className="fa-solid fa-chevron-down"></i></Link> 
              <Link>On Sale</Link>
              <Link>New Arrivals</Link>
              <Link>Brands</Link>
            </ul>
          </nav>
          <div className='w-[577px] h-[48px] flex gap-3 items-center bg-[#F0F0F0] rounded-[62px] max-md:hidden'>
            <i className="fa-solid fa-magnifying-glass text-gray-500 text-[24px] relative left-[15px]"></i>
            <input type="text" className='text-[#00000066] text-[16px] relative left-[15px] outline-[none] w-[88%] h-full outline-[0px]' placeholder='Search for products...'/>
          </div>
          <div className='flex gap-[14px] items-center'>
            <div className='hidden max-md:block'><i className="fa-solid fa-magnifying-glass text-black text-[24px]"></i></div>
            <i className="fa-solid fa-cart-shopping text-[24px]"></i>
            <div className='max-sm:hidden'><i className="fa-solid fa-circle-user text-[24px]"></i></div>
          </div>
        </div>
      </div>
    <Routes>
      <Route path='*' element={
        <>
        <Hero/>
        <NewArrivals title={"NEW ARRIVALS"} info={info}/>
        <NewArrivals title={"TOP SELLING"} info={info}/>
        <BrowseByDressStyle/>
        <OurHappyCostumers/>
        <Footer/>
        </>
      }/>
      <Route path="/shop" element={
        <>
        <Item /> 
        <RatingAndReviwevs/>
        </>
      }/>
    </Routes>
    </BrowserRouter>
    </itemContext.Provider>
    </>
  )
}

export default App
