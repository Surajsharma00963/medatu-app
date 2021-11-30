import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/pages/Aboutus";
import Blog from "./components/pages/Blogs";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Doctor from "./components/pages/RegisterDoctor";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/Blogs" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/regDoc" element={<Doctor />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
