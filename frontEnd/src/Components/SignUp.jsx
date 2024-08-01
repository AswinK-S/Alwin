import axiosApi from "../service/axiosApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cPassword: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validateField = (name, value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        switch (name) {
            case 'name':
                return value.length >= 3 ? "" : 'Name must be at least 3 characters long';
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : 'Please enter a valid email address';
            case 'password':
                return passwordRegex.test(value) ? "" : 'Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one number.';
            case 'cPassword':
                return value === formData.password ? "" : 'Password and Confirm Password do not match';
            default:
                return "";
        }
    }

    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Validate the field and update the error state
        const errorMessage = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: errorMessage
        }))

        // Special case for cPassword
        if (name === 'password') {
            const cPasswordError = value === formData.cPassword ? "" : 'Password and Confirm Password do not match';
            setErrors(prev => ({
                ...prev,
                cPassword: cPasswordError
            }))
        }

    }

    //signup form validation
    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const errorMessage = validateField(key, formData[key]);
            if (errorMessage) {
                newErrors[key] = errorMessage;
            }
        });

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if (validateForm()) {
                const res = await axiosApi.post('/signUp',formData)
                console.log('signup', res);
                if(res.status===201){
                    navigate('/login')
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="border shadow-md rounded-md py-10 px-6 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <h1 className="font-bold text-lg">SignUp</h1>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input
                                className="border border-gray-300 rounded-md p-2"
                                type="text"
                                name="name"
                                placeholder="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                className="border border-gray-300 rounded-md p-2"
                                type="email"
                                name="email"
                                placeholder="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                className="border border-gray-300 rounded-md p-2"
                                type="password"
                                name="password"
                                placeholder="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="cPassword">Confirm Password</label>
                            <input
                                className="border border-gray-300 rounded-md p-2"
                                type="password"
                                name="cPassword"
                                placeholder="confirm password"
                                value={formData.cPassword}
                                onChange={handleChange}
                            />
                            {errors.cPassword && <span className="text-red-500 text-sm mt-1">{errors.cPassword}</span>}
                        </div>

                        <button
                            className="bg-blue-500 text-white rounded-md py-2 mt-4"
                            type="submit"
                        >
                            SignUp
                        </button>

                        <p className="text-sm bg-transparent font-normal text-center text-gray-700">
                            {" "}
                            have an account?{" "}

                            <Link className='text-blue-900' to='/login'> Login  </Link>
                        </p>
                    </div>
                </form>

            </div>
        </>
    );
}

export default SignUp;
