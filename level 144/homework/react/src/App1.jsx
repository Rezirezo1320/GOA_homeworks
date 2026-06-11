import reactLogo from './assets/react.svg'
import viteLogo from 'C:/Users/Administrator/Desktop/react/public/vite.svg'
import { useState, use } from 'react'
function App1() {
    const [count, setCount] = useState(0)
    return (
        <>
        <main class="flex justify-center mt-[100px] gap-30 flex-wrap flex-col">
            <div  class="flex justify-center mt-[100px] gap-30 flex-wrap">
                <div class="flex flex-col gap-15 justify-center">
                    <h1 class="text-left">Create your first vite+react <br/>
                    project</h1> 
                    <p>Start building modern web applications with the power of <br/>
                    React and the speed of Vite.Vite provides an ultra-fast development <br/>
                    environment, while React makes building interactive UIs simple and <br/> efficient.</p>
                </div>
                <img src="/main.png" class="w-230"/>
            </div>
            <div class="text-center flex flex-col justify-center items-center">
                <div class="text-center flex flex-col justify-center items-center">
                    <img src="/vite-logo.png" alt="" width={130}/>
                    <h1 class="font-manrope font-semibold">Redefining developer experience</h1><br/>
                    <h2 class="text-2xl text-gray-300">Vite makes web development simple again</h2><br/>
                    <div class="grid grid-cols-3 grid-rows-2 auto-fit">
                        <img src="/f1.png" alt="" class="col-start-1 col-end-2 rounded-xl" width={340}/>
                        <img src="/f2.png" alt="" class="col-start-2 col-end-4 rounded-xl"/>
                        <img src="/f3.png" alt="" class="col-start-1 col-end-3 rounded-xl"/>
                        <img src="/f4.png" alt="" class="col-start- col-end-4 justify-self-end rounded-xl"/>
                    </div>
                </div> 
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
                <h1 id="counter" className={count > 0 ? 'text-green-500' : count == 0 ? 'text-white' : 'text-red-500'}>{count}</h1>
                <div className='flex gap-10'>
                    <button onClick={(e)=>{
                    setCount(count+1)
                    }}>Increase</button>
                    <button onClick={(e)=>{
                        setCount(0)
                    }}>Reset</button>
                    <button onClick={(e)=>{
                        setCount(count-1)
                    }}>Decrease</button>
                </div>
            </div>
            <br /><br /><br /><br />
            <div class="relative w-64">
            </div>
        </main>
        </>
    )
}

export default App1