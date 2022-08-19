 import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login"
import Resister from "./pages/Resister/resister"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resister" element={<Resister />} />
      

      
    </Routes>
  </BrowserRouter>




  )
}

export default App;
// hello 
// t


