import { useState } from "react"

function SmartWatch() {
    const [color, setColor] = useState("pink")
    const [mode, setMode] = useState("time")

    const colors = [
        { id: "black", hex: "#23211f" },
        { id: "red", hex: "#ca3d22" },
        { id: "blue", hex: "#565681" },
        { id: "purple", hex: "#8a5362" },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-sans">
        <header className="fixed top-0 w-full h-[100px] bg-[#212134] flex justify-center items-center">
            <img src="imgs/Amazon-logo.png" alt="Amazon" className="w-[130px]" />
            <img src="imgs/login.png" alt="Login" className="absolute right-5 w-[30px] cursor-pointer transition duration-300 hover:invert-[50%]" />
        </header>

        <main className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-[120px]">
            <div className="flex justify-center items-center bg-center bg-no-repeat bg-contain w-[430px] h-[430px]" style={{ backgroundImage: `url(imgs/${color}.png)` }}>
            {mode === "time" ? <h1 className="text-white text-4xl font-bold z-10">00:00:00</h1> : (
                <div className="flex flex-col items-center justify-center">
                <img src="imgs/heart.png" alt="Heart" className="w-[120px] animate-[heartbeat_1s_ease-out_infinite]" />
                <h1 className="text-white text-3xl font-bold">73</h1>
                </div>
            )}
            </div>

            <div className="flex flex-col gap-10 max-w-md">
            <section className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold">FitBit 19 - The Smartest Watch</h1>
                <p className="text-gray-600 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora nemo ex eligendi iure architecto repudiandae.</p>
            </section>

            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Select Color</h1>
                <div className="flex flex-wrap gap-4">
                {colors.map(c => (
                    <div key={c.id} onClick={() => setColor(c.id)} className="w-[57px] h-[40px] rounded cursor-pointer transition-transform duration-300 hover:scale-125" style={{ backgroundColor: c.hex }}></div>
                ))}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Features</h1>
                <div className="flex gap-4">
                <button onClick={() => setMode("time")} className="bg-[#edebeb] hover:bg-[#dbdada] transition px-6 py-2 text-lg font-bold rounded">Time</button>
                <button onClick={() => setMode("heart")} className="bg-[#edebeb] hover:bg-[#dbdada] transition px-6 py-2 text-lg font-bold rounded">Heart Rate</button>
                </div>
            </div>

            <div className="bg-[#ffa500] hover:bg-[#b87802] hover:scale-110 transition px-6 py-3 text-lg font-extrabold text-center rounded cursor-pointer w-max">BUY NOW</div>
            </div>
        </main>
        </div>
    )
}

export default SmartWatch