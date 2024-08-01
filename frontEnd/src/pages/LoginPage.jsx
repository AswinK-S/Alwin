import Login from "../Components/Login"
import Navbar from "../Components/NavBar"

const LoginPage = () => {
    return (
        <>
            <div className="h[100vh]">
                <Navbar />
                <div className="flex justify-center items-center h-[90vh]">
                    <Login />

                </div>
            </div>
        </>
    )
}

export default LoginPage