import reactLogo from './assets/react.svg'
import viteLogo from 'C:/Users/Administrator/Desktop/react/public/vite.svg'
import './App.css'

function App() {
  return (
    <header class="flex gap-30 align-center justify-around w-full flex-wrap">
      <img src="/vite.svg" alt="" class="cursor-pointer"/>
      <nav>
        <ul class="flex gap-10">
          <li class="cursor-pointer">Home</li>
          <li class="cursor-pointer">About us</li>
          <li class="cursor-pointer">Contact us</li>
        </ul>
      </nav>
      <div class='flex gap-10'>
        <button id="signup">Sign up</button>
        <button id="login">Log in</button>
      </div>
    </header>
  )
}

export default App
