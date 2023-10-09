import './App.css';
import Homepage from './pages/Homepage';
import { Routes, Route} from "react-router-dom";
import Login from "./components/Login";
// import NavBar from "./components/NavBar";
import Community from "./pages/Community";
import Search  from "./pages/Search"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Homepage />} />
      <Route path="community" element={ <Community/>}></Route>
      <Route path="search" element={ <Search/>}></Route>
    </Routes>
    </>
  );
}

export default App;
