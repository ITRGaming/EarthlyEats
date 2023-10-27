import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SellerLogin from "./pages/sellerLogin";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "react-use-cart";
import Community from "./pages/Community";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/seller" element={<SellerLogin />} />
          <Route path="home" element={<Homepage />} />
          <Route path="community" element={<Community />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <NotificationContainer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
