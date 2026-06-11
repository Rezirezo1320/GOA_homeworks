import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function RatingAndReviwevsCard({firstName, lastName, review, date}) {

    return (
        <>
            <div className='w-[610px] h-[240px] border border-[#0000001A] px-[32px] py-[28px] flex flex-col items-start justify-center gap-[10px] rounded-[20px] shrink-[0] grow-[0] max-sm:w-[100%] mt-[20px]'>
                <img src="/images/5star.png" alt="" />
                <h1 className='text-[20px] font-[700] '>{firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase()+"."} <i class="fa-solid fa-circle-check  text-[#01AB31]"></i></h1>
                <p className='max-x-[336px] text-[#00000099] leading-[22px]'>{review}</p>
                <h1 className='text-[#00000099] font-[500]'>Posted on {date}</h1>
            </div>
        </>
    )
}

export default RatingAndReviwevsCard