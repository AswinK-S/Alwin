


import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import axiosApi from "../service/axiosApi"

const AuthRoute = ({ children, requireAuth, refreshAuthStatus }) => {
    const [authStatus, setAuthStatus] = useState('checking');
    const navigate = useNavigate()
    
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                console.log('authcheck');
                const res = await axiosApi.get('/authCheck')
                setAuthStatus(res.data.isAuthenticated ? 'authenticated' : 'unauthenticated');
            } catch (error) {
                console.log('Error:', error.response)
                setAuthStatus('unauthenticated');
            }
        }

        checkAuthStatus()
    }, [])

    useEffect(() => {
        if (authStatus === 'checking') return;

        if (requireAuth && authStatus === 'unauthenticated') {
            console.log('not authenticated');
            navigate('/login');
        } else if (!requireAuth && authStatus === 'authenticated') {
            console.log('authenticated');
            navigate('/dashboard');
        }
    }, [authStatus, requireAuth, navigate]);

    if (authStatus === 'checking') {
        return <div>Loading...</div>
    }
    return children
}

AuthRoute.propTypes = {
    children: PropTypes.node.isRequired,
    requireAuth: PropTypes.bool.isRequired,
    refreshAuthStatus: PropTypes.func.isRequired
}

export default AuthRoute