import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
// import bdashbord and postpage to get data our components
import DashbordPage from './pages/DashbordPage';

import PostsPage from './pages/PostsPage';

import { Link } from 'react-router-dom'

const App = () => {
  return (
   <Router>
       <Link to="/">
        Back to Main page
      </Link>
     <Switch>
       <Route exact path="/" component={DashbordPage}/>
       <Route exact path="/posts" component={PostsPage}/>
       <Redirect to="/" />

     </Switch>
   </Router>
  );
}

export default App;
