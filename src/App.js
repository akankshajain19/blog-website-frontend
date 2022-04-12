import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login";
import Create from "./components/Create";
import { Switch } from "react-router-dom";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";
import AllPost from "./components/AllPost";

import EditImage from "./components/EditImage";
import Comment from "./components/Comment";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  // const userId = sessionStorage.getItem("id");
  // const postId = sessionStorage.getItem("p_url");
  return (
    <div className="container">
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/create" exact component={Create}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/aboutus" exact component={AboutUs}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route
            path="/profile/viewPost/:post_url/:post_id"
            exact
            component={ViewPost}
          ></Route>

          <Route path="/profile" exact component={Profile}></Route>

          <Route
            path="/profile/editPost/:post_url/:post_id"
            exact
            component={EditPost}
          ></Route>
          <Route
            path="/profile/editImage/:post_url/:post_id"
            exact
            component={EditImage}
          ></Route>
          <Route path="/comment" exact component={Comment}></Route>
          <Route path="/allPost/:category_id" exact component={AllPost}></Route>
          <Route path="/allPost" exact component={AllPost}></Route>
          <Route
            path="/allPost/viewPost/:post_url/:post_id"
            exact
            component={ViewPost}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
