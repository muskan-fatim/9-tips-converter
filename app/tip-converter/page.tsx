'use client'
import { useRef, useState } from "react"

export default function TipConverter() {
    let [tip, setTip] = useState("")
    let total = useRef<HTMLInputElement | null>(null)
    let percent = useRef<HTMLInputElement | null>(null)

    const handleTipCalculation = () => {
        if (total.current && percent.current) {
            let t = total.current?.value
            let p = percent.current?.value
            let tips = Number(t) * Number(p) / 100
            setTip(tips.toFixed(2))
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">Tip Converter App</h1>
            <div className="mb-4 w-64">
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter your total amount</label>
                <input 
                    type="number" 
                    ref={total} 
                    placeholder="Enter your amount" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4 w-64">
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter your tip percentage</label>
                <input 
                    type="number" 
                    ref={percent} 
                    placeholder="Enter your percentage" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <button 
                onClick={handleTipCalculation} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Convert Tip
            </button>
            <p className="mt-4 text-lg font-semibold text-gray-700">Tip amount: <span className="text-blue-600">{tip}</span></p>
        </div>
    )
}
