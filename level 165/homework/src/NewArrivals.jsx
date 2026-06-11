import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NewArrivalsCard from './NewArrivalsCard'
function NewArrivals() {

    return (
        <>
        <div className='mt-[60px]'>
            <h1 className='text-[48px] text-black font-[900] text-center'>NEW ARRIVALS</h1>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-wrap'>
                <NewArrivalsCard imgSrc="/images/blackshirt.png" name="T-Shirt with Tape Details" rating={4.5} price={120}/>
                <NewArrivalsCard imgSrc="/images/bluejeans.png" name="Skinny Fit Jeans" rating={3.5} price={240} isDiscount prevPrice={260} discount={20}/>
                <NewArrivalsCard imgSrc="/images/redshirt.png" name="Checkered Shirt" rating={4.5} price={180}/>
                <NewArrivalsCard imgSrc="/images/orangeshirt.png" name="Sleeve Striped T-shirt" rating={4.5} price={130} isDiscount prevPrice={160} discount={30}/>
            </div>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-col items-center gap-[70px]'>
                <button className='w-[258px] h-[52px] rounded-[62px] border border-[#0000001A] font-[500]'>View All</button>
                <img src="/images/line.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default NewArrivals