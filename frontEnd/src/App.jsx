import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignUp from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import UserDashBoard from "./pages/UserDashBoard"

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dashBoard" element={<UserDashBoard/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
