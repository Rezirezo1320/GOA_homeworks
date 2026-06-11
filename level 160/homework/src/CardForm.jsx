import  { useState } from "react"
function CardForm() {
    const [formData, setFormData] = useState({ name: "", num: "", year: "", cvc: "" })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nums = ["1","2","3","4","5","6","7","8","9","0"," "]
        const valid = []
        for (let ch of formData.num) {
            valid.push(nums.includes(ch))
        }
        valid.push(formData.cvc.length === 3)
        if (valid.includes(false)) {
            alert("You have filled the form incorrectly")
        }
        else {
            setSubmitted(true)
        }
    }

    const handleBack = () => {
        setSubmitted(false)
        setFormData({ name: "", num: "", year: "", cvc: "" })
    }

    return (
        <div className="min-h-screen flex flex-wrap items-center justify-center font-inter text-[#220930]">
        <div className="flex flex-wrap items-center justify-center gap-[150px] max-[1717px]:flex-col max-[1717px]:gap-0">

            {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col text-start p-10 w-full max-w-[500px] gap-4">
                <label htmlFor="name" className="font-medium">CARDHOLDER NAME</label>
                <input id="name" type="text" value={formData.name} onChange={handleChange} placeholder="e.g. Jane Applesed" required className="p-4 rounded-lg border border-black/20 placeholder:text-black/20" />

                <label htmlFor="num" className="font-medium">CARD NUMBER</label>
                <input id="num" type="text" value={formData.num} onChange={handleChange} placeholder="e.g. 1234 5678 9123 0000" required className="p-4 rounded-lg border border-black/20 placeholder:text-black/20" />

                <div className="flex gap-10 max-[1717px]:flex-col w-full">
                <div>
                    <label htmlFor="year" className="font-medium">EXP. DATE (MM/YY)</label>
                    <input id="year" type="text" value={formData.year} onChange={handleChange} placeholder="MM/YY" required className="p-4 rounded-lg border border-black/20 w-full" />
                </div>
                <div>
                    <label htmlFor="cvc" className="font-medium">CVC</label>
                    <input id="cvc" type="text" value={formData.cvc} onChange={handleChange} placeholder="e.g. 123" maxLength="3" className="p-4 rounded-lg border border-black/20 placeholder:text-black/20 w-full" />
                </div>
                </div>

                <button type="submit" className="h-[50px] text-lg text-white bg-[#220930] rounded-lg mt-4 hover:bg-[hsl(249,99%,64%)] transition">Confirm</button>
            </form>
            ) : (
            <div className="flex flex-col items-center justify-center gap-5 w-full p-10">
                <img src="/images/icon-complete.svg" alt="Complete" />
                <h1 className="text-2xl font-bold">THANK YOU!</h1>
                <p className="text-gray-600">We've added your card details.</p>
                <button onClick={handleBack} className="w-full max-w-[500px] h-[50px] text-lg text-white bg-[#220930] rounded-lg hover:bg-[hsl(249,99%,64%)] transition">Continue</button>
            </div>
            )}
        </div>
        </div>
    )
}

export default CardForm