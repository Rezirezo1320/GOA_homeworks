import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Card({children}) {
    return (
        <>
            <div style={{display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"10px"}}>
                {children}
            </div>
        </>
    )
}

export default App
