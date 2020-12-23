import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './component/home';
import Posts from './component/posts';
import Profile from './component/profile';
import PostItem from './component/post_item'

const App = () => (
  //pages are not reloading -> changing url dynamically and getting component we need 
  <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br/>
      <Link to="/posts">Posts</Link><br/>
      <Link to={{
        pathname: '/profile',
        search: '?profile=true',
        hash: '#HR'
      }}>Profile</Link><br/>
    </header>
    <Route path="/" exact component={Home}/>
    <Route path="/posts" exact component={Posts}/>
    <Route path="/posts/:id" component={PostItem}/>
    <Route path="/profile" exact component={Profile}/>
  </BrowserRouter>
)

ReactDOM.render( <App />, document.getElementById('root')
);

