 import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login"
import Resister from "./pages/Resister/resister"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";


function App() {
  const {user} = useContext(AuthContext);

  return (


  <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Resister />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
      <Route path="/resister" element={user ? <Navigate to="/"/> : <Resister />} />
      

      
    </Routes>
  </BrowserRouter>




  )
}

export default App;



// getting started with node 