import './App.css';
import './user.css';
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Userdetails from "./pages/Userdetails";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import LoginDetails from "./pages/LoginDetails";
import Location from "./pages/Location";



const App = () =>{
  return <>
       <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path = "/User/:id" element= {<Userdetails/>}>
        <Route path = "locationdetails" element= {<Location/>}/>
        <Route path = "logindetails" element= {<LoginDetails/>}/>
      </Route>
      <Route path = "*" element= {<Error/>}/>
    </Routes>
  </>
}

export default App