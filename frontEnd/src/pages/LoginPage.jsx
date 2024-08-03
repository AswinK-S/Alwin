import Login from "../Components/Login"
import Navbar from "../Components/NavBar"
import propTypes from 'prop-types'

const LoginPage = ({ refreshAuthStatus }) => {
    return (
        <>
            <div className="h[100vh]">
                <Navbar refreshAuthStatus={refreshAuthStatus} />
                <div className="flex justify-center items-center h-[90vh]">
                    <Login refreshAuthStatus={refreshAuthStatus} />
                </div>
            </div>
        </>
    )
}

LoginPage.propTypes = {
    refreshAuthStatus: propTypes.func.isRequired
}

export default LoginPage