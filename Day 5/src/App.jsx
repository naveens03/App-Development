import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from "./Components/Contact";
import HomePage from "./Components/Homepage";
import LoginForm from "./Components/LoginAdmin";
import Navbar from "./Components/Navbar";
// import Payment from "./Components/Payment.Jsx";
import Sidebar from "./Components/SideBar";
import UserBoat from "./Components/UserBoat";
import ProductSection from "./Components/UserBoat";
import Cards from "./Components/UserBoat";
// import DasApp from "./Components/UserDash";
import SignupForm from "./Components/register";
import RegisterForm from "./Components/register";
import UserLogin from "./UserLogin";
import AdminDash from "./Components/AdminDash";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Signup" element={<SignupForm/>}/>
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/Boat" element={<UserBoat/>}/>
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/admin" element={<AdminDash/>}/>
      
      </Routes>
    </Router>
      {/* <Navbar /> */}
      {/*</LoginForm>*/}
      {/*<UserLogin> */}
      {/* </SignupForm> */}
     

      
      </>

  );
}

export default App;
