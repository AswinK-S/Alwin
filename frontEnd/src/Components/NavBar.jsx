import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../store/slice';
import axiosApi from '../service/axiosApi';
import propTypes from 'prop-types'

const Navbar = ({refreshAuthStatus}) => {
 
  const user = useSelector(state =>state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAuth =async()=>{
    try {

      if(user){
        await axiosApi.get('/logout')
        dispatch(userLogOut())
        refreshAuthStatus()
        navigate('/')
      }else{
        navigate('/login')
      }

    } catch (error) {
      console.error('Logout failed', error);
    }
     
  }

  return (
    <nav className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-2xl font-bold">
          Alwin
        </Link>
        <div className="flex items-center">
          {user && (
            <Link to="/dashboard" className="text-white mr-4 hover:text-gray-300">
              Dashboard
            </Link>
          )}
          <button
            onClick={handleAuth}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes ={
  refreshAuthStatus:propTypes.func.isRequired
}

export default Navbar;