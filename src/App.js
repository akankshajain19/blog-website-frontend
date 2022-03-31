import Home from "./components/Home";
import { BrowserRouter,  Route } from "react-router-dom";

import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login";
import Create from "./components/Create";
import { Switch } from "react-router-dom";
import Profile from "./components/Profile";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <ToastContainer />
      <Switch >
        <Route path="/" exact component={Home}></Route>
        <Route path="/create" exact component={Create}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/profile" exact component={Profile}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
