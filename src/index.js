import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './component/home';
import Posts from './component/posts';
import Profile from './component/profile';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Home}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/profile"  component={Profile}/>
  </BrowserRouter>
)

ReactDOM.render( <App />, document.getElementById('root')
);

