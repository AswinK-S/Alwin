import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignUp from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import UserDashBoard from "./pages/UserDashBoard"
import AuthRoute from "./Components/AuthRoute"
import { useState } from "react"

// function App() {

//   return (
//     <>
//      <BrowserRouter>
//      <Routes>
//       <Route path="/" element={<AuthRoute requireAuth={false}> <SignUp/> </AuthRoute>  } />
//       <Route path="/login" element={<AuthRoute requireAuth={false}> <LoginPage/> </AuthRoute>}/>
//       <Route path="/dashBoard" element={<AuthRoute requireAuth={true}> <UserDashBoard/> </AuthRoute> }/>
//      </Routes>
//      </BrowserRouter>
//     </>
//   )
// }

// export default App

function App() {
  const [authKey, setAuthKey] = useState(0);

  const refreshAuthStatus = () => {
    setAuthKey(prevKey => prevKey + 1);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthRoute key={authKey} requireAuth={false} refreshAuthStatus={refreshAuthStatus}>
            <SignUp refreshAuthStatus={refreshAuthStatus}/>
          </AuthRoute>
        } />
        <Route path="/login" element={
          <AuthRoute key={authKey} requireAuth={false} refreshAuthStatus={refreshAuthStatus}>
            <LoginPage refreshAuthStatus={refreshAuthStatus} />
          </AuthRoute>
        } />
        <Route path="/dashboard" element={
          <AuthRoute key={authKey} requireAuth={true} refreshAuthStatus={refreshAuthStatus}>
            <UserDashBoard refreshAuthStatus={refreshAuthStatus}/>
          </AuthRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
