import './App.css';
import Homepage from './pages/Homepage';
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
// import NavBar from "./components/NavBar";
import Community from "./pages/Community";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Homepage />} />
      <Route path="community" element={ <Community/>}></Route>
    </Routes>
    </>
  );
}

export default App;
