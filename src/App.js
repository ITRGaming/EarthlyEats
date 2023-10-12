import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SellerLogin from "./pages/SellerLogin";
import { AuthProvider } from "./components/AuthContext";
// import NavBar from "./components/NavBar";
import Community from "./pages/Community";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/seller" element={<SellerLogin />} />
        <Route path="home" element={<Homepage />} />
        <Route path="community" element={<Community />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
