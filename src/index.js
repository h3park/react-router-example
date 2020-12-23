import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './component/home';
import Posts from './component/posts';
import Profile from './component/profile';

const App = () => (
  <div>
    Hello World
  </div>
)

ReactDOM.render( <App />, document.getElementById('root')
);

