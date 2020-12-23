import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './component/home';
import Posts from './component/posts';
import Profile from './component/profile';

const App = () => (
  <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br/>
      <Link to="/posts">Posts</Link><br/>
      <Link to="/profile">Profile</Link><br/>
    </header>
    <Route path="/" exact component={Home}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/profile"  component={Profile}/>
  </BrowserRouter>
)

ReactDOM.render( <App />, document.getElementById('root')
);

