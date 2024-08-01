
const SignUp = () => {
    return (
        <>
            <div className="border border-gray-500 rounded-md py-10 px-32 flex flex-col gap-5">
                <div className="flex justify-center">
                    <h1 className="font-bold text-lg">SignUp</h1>
                </div>
                <label htmlFor="name">Name</label>
                <input className="border border-gray-300 rounded-md p-2" type="text" name="name" placeholder="name" />
                
                <label htmlFor="email">Email</label>
                <input className="border border-gray-300 rounded-md p-2" type="email" name="email" placeholder="email" />
                
                <label htmlFor="password">Password</label>
                <input className="border border-gray-300 rounded-md p-2" type="password" name="password" placeholder="password" />
                
                <label htmlFor="cPassword">Confirm Password</label>
                <input className="border border-gray-300 rounded-md p-2" type="password" name="cPassword" placeholder="confirm password" />
                
                <button className="bg-blue-500 text-white rounded-md py-2 mt-4">SignUp</button>
            </div>
        </>
    );
}

export default SignUp;
