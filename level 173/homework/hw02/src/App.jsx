import { useState, createContext } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

import Comp_01 from './Comp_01'

export const count1Context = createContext()

function App() {
  const [count1, setCount1] = useState(0)

  return (
    <count1Context.Provider value={{ count1, setCount1 }}>
      <BrowserRouter>
        <div className="text-center">
          <h1 className="text-8xl">{count1}</h1>

          <button className="w-[600px] h-[100px] bg-gray-600 border cursor-pointer text-center text-7xl m-2" onClick={() => setCount1(count1 - 1)}>
            Decrease
          </button>

          <button className="w-[600px] h-[100px] bg-gray-600 border cursor-pointer text-center text-7xl m-2" onClick={() => setCount1(count1 + 1)}>
            Increase
          </button>

          <br />
          <h1 className="text-8xl mt-10">App</h1>
          <Link to="/Comp_01">
            <button className="w-[600px] h-[100px] bg-gray-600 border cursor-pointer text-center text-4xl mt-4">
              Send info to next Component
            </button>
          </Link>

          <Routes>
            <Route path="/Comp_01" element={<Comp_01 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </count1Context.Provider>
  )
}

export default App