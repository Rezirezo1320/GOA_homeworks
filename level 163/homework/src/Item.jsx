import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function Item() {

    return (
        <>
        <img src="/images/border.png" alt="" className='block mx-auto'/><br />
        <div className='flex justify-center w-[full] gap-[25px] flex-wrap'> 
            <div>
                <h1 className='text-[#00000099] flex items-center gap-[10px] max-sm:ml-[20px]'>
                Home 
                <i class="fa-solid fa-chevron-right text-[#00000099]"></i> 
                Shop 
                <i class="fa-solid fa-chevron-right text-[#00000099]"></i> 
                Men 
                <i class="fa-solid fa-chevron-right text-[#00000099]"></i>
                <span className='text-[#000000]'>T-shirts</span></h1><br />
                <div className='flex gap-[15px] max-sm:flex-col-reverse max=sm:w-full px-[15px]'>
                    <section className='flex flex-col gap-[15px]  max-sm:flex-row max-sm:w-full'>
                        <img src="/images/shirt1.png" alt="" className='w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px]'/>
                        <img src="/images/shirt2.png" alt="" className='w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px]'/>
                        <img src="/images/shirt3.png" alt="" className='w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px]'/>
                    </section>
                    <img src="/images/shirt.png" alt="" className='max-sm:w-full ' />
                </div>
            </div>
            <div className='w-[590px] flex flex-col justify-between max-sm:px-[15px]'><br />
                <h1 className='text-[40px] font-[900] max-sm:max-w-[247px] max-sm:text-[24px]'>ONE LIFE GRAPHIC T-SHIRT</h1>
                <div className='flex items-center gap-3 max-sm:w-[105px] max-sm:h-[18px]'>
                    <img src="/images/stars.png" alt="" />
                    <p>4.5/5</p>
                </div>
                <div className='flex gap-[15px] items-center'>
                    <h1 className='text-[32px] flex gap-[15px]'>
                        <span className='font-[700] max-sm:text-[24px]'>$260</span>
                        <span className='font-[500] text-[#0000004D] line-through max-sm:text-[24px]'>$300</span>
                    </h1>
                    <div className='bg-[#FF33331A] w-[72px] h-[34px] rounded-[62px] font-[400] flex items-center justify-center text-[#FF3333]'>
                        -40%
                    </div>
                </div>
                <p className='text-[#00000099] max-sm:text-[14px]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br /> breathable fabric, it offers superior comfort and style.</p>
                <div className='flex flex-col gap-[5px] border-b border-t w-full border-[#0000001A] py-[15px]'>
                    <p className='text-[#00000099]'>Select Colors</p>
                    <section className='flex gap-[16px]'>
                        <div className='w-[37px] h-[37px] rounded-[50%] bg-[#4f4631]'></div>
                        <div className='w-[37px] h-[37px] rounded-[50%] bg-[#314f4a]'></div>
                        <div className='w-[37px] h-[37px] rounded-[50%] bg-[#31344f]'></div>
                    </section>
                </div>
                <div className='flex flex-col gap-[5px] border-b  w-full border-[#0000001A] py-[15px]'>
                    <p className='text-[#00000099]'>Choose Size</p>
                    <section className='flex gap-[16px]'>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full'>Small</button>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full'>Medium</button>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] bg-[black] text-white max-sm:w-full'>Large</button>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full'>X-Large</button>
                    </section>
                </div>
                <div className='flex gap-[17px]'>
                    <section className='w-[170px] h-[52px] bg-[#F0F0F0] flex items-center justify-evenly rounded-[62px] max-sm:w-[40%]'>
                        <p className='text-[40px]'>-</p>
                        <p>1</p>
                        <p className='text-[40px]'>+</p>
                    </section>
                    <button className='w-[400px] h-[52px] py-[16px] px-[54px] bg-black rounded-[62px] text-white max-sm:w-[60%]'>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item
