import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, HashRouter, MemoryRouter, NavLink, Switch} from 'react-router-dom';

import Home from './component/home';
import Posts from './component/posts';
import Profile from './component/profile';
import PostItem from './component/post_item';
import NotFound from './component/404';

const App = () => (
  //pages are not reloading -> changing url dynamically and getting component we need 
  <BrowserRouter>
    <header>
      <NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink><br/>

      <NavLink to="/posts" exact activeStyle={{color: 'green'}}>Posts</NavLink><br/>
      
      <NavLink to={{
        pathname: '/profile',
        search: '?profile=true',
        hash: '#HR'
      }} exact activeStyle={{color: 'green'}}>Profile</NavLink><br/>
    
    </header>

    <Switch> 
      <Route path="/posts/:id" component={PostItem}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/" exact component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render( <App />, document.getElementById('root')
);

