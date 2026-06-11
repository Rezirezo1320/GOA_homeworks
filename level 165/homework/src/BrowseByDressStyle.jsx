import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function BrowseByDressStyle() {

    return (
        <>
        <div className='w-[85%] h-[866px] bg-[#F0F0F0] rounded-[40px] flex justify-self-center mt-[80px] justify-center flex-col items-center gap-[50px] max-lg:w-[100%] max-lg:px-[15px]  max-lg:text-center'>
            <h1 className='text-[48px] font-[900] max-sm:text-[32px]'>BROWSE BY DRESS STYLE</h1>
            <div className='flex items-center flex-col gap-[20px] max-lg:w-[100%]'>
                <div className='flex items-center gap-[20px] max-md:flex-col'>
                    <img src="/images/casual.png" alt="" className='max-lg:w-[100%] max-lg:w-[300px] max-lg:h-[150px]'/>
                    <img src="/images/formal.png" alt="" className='max-lg:w-[100%] max-lg:w-[300px] max-lg:h-[150px]'/>
                </div>
                <div className='flex items-center gap-[20px] max-md:flex-col'>
                    <img src="/images/party.png" alt=""className='max-lg:w-[100%] max-lg:w-[300px] max-lg:h-[150px]' />
                    <img src="/images/gym.png" alt="" className='max-lg:w-[100%] max-lg:w-[300px] max-lg:h-[150px]'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default BrowseByDressStyle