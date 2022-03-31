import Home from "./components/Home";
import { BrowserRouter,  Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Create from "./components/Create";
import { Switch } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home}></Route>
        <Route path="/create" exact component={Create}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/profile" exact component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
