
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import './App.css';

import Navbar from './component/Navbar/Navbar.js'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Profile from './pages/Profile.js'
import Gallery from './pages/Gallery.js'




function App() {

  
  return (
    <Router>
      <div>


      <Navbar />


      <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Register">
            <Register/>
          </Route> 

          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/Profile">
            <Profile />
          
          </Route>
          
          <Route path="/Gallery">
            <Gallery />
          </Route>


      </Switch>

      

      </div>
    </Router>
  );
}

export default App;
