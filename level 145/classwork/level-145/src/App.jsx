import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App(props) {
  return (
    <>
      <div>
        <img src={props.url}/>
        <h1>{props.title}</h1>
        <p>${props.price}</p>
      </div>
    </>
  )
}

export default App