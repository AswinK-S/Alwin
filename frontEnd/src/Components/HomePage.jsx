import { useState } from "react"
import SignUp from "./SignUp"

const HomePage = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="flex justify-center items-center h-[100vh]  " onClick={handleClick}>
                {toggle ? (<SignUp/>) : 
                (
                    <span className="border border-black p-20 rounded-md cursor-pointer" onClick={handleClick}>
                        <h1 className="text-sky-400 text-2xl font-bold ">WELCOME</h1>
                    </span>
                )}

            </div>
        </>
    )
}

export default HomePage