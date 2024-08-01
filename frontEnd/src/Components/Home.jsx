import { useState } from "react"
import SignUp from "./SignUp"
import Navbar from "./NavBar"

const HomePage = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <>

            <div className="h-[100vh]">
                <Navbar />
                <div className=" flex justify-center items-center h-[90vh] ">
                    {toggle ? (
                        <div className="w-full max-w-md">
                            <SignUp />
                        </div>
                    ) : (
                        <span className="border shadow-md    p-20 rounded-md cursor-pointer" onClick={handleClick}>
                            <h1 className="text-sky-400 text-2xl font-bold">WELCOME</h1>
                        </span>
                    )}
                </div>

            </div>
        </>
    )
}

export default HomePage