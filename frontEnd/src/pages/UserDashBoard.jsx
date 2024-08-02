import Navbar from '../Components/NavBar'
import Dashboard from '../Components/DashBoard'
import propTypes from 'prop-types'

const UserDashBoard = ({ refreshAuthStatus }) => {
  return (
    <>
      <Navbar refreshAuthStatus={refreshAuthStatus} />
      <Dashboard />
    </>

  )
}

UserDashBoard.propTypes = {
  refreshAuthStatus: propTypes.func.isRequired
}

export default UserDashBoard