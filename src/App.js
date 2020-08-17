import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import DashbordPage from './pages/DashbordPage';

import PostsPage from './pages/PostsPage';

const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={DashbordPage}/>
       <Route exact path="/posts" component={PostsPage}/>
       <Redirect to="/" />
     </Switch>
   </Router>
  );
}

export default App;
