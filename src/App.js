import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/create" exact element={<Create></Create>}></Route>
        <Route path="/register" exact element={<Register></Register>}></Route>
        <Route path="/login" exact element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
