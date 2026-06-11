import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NewArrivalsCard from './NewArrivalsCard'
function TopSelling() {

    return (
        <>
        <div className='mt-[60px]'>
            <h1 className='text-[48px] text-black font-[900] text-center'>TOP SELLING</h1>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-wrap'>
                <NewArrivalsCard imgSrc="/images/greenshirt.png" name="Vertical Srtiped Shirt" rating={5} price={212} isDiscount discount={20} prevPrice={232}/>
                <NewArrivalsCard imgSrc="/images/orangeshirt2.png" name="Courage Graphic T-shirt" rating={4} price={145} />
                <NewArrivalsCard imgSrc="/images/bluejeans2.png" name="Loose Fit Bermuda Shorts" rating={3} price={80}/>
                <NewArrivalsCard imgSrc="/images/blackjeans.png" name="Faded Skinny Jeans" rating={4.5} price={210}/>
            </div>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-col items-center gap-[70px]'>
                <button className='w-[258px] h-[52px] rounded-[62px] border border-[#0000001A] font-[500]'>View All</button>
            </div>
        </div>
        </>
    )
}

export default TopSelling
