import HomePage from "../Components/Home"
import propTypes from 'prop-types'

const SignUp = ({ refreshAuthStatus }) => {
    return (
        <>
            <HomePage refreshAuthStatus={refreshAuthStatus} />
        </>
    )
}

SignUp.propTypes = {
    refreshAuthStatus: propTypes.func.isRequired
}

export default SignUp