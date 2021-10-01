import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Blog/Header';
import NavigationBar from './components/Blog/NavigationBar';

import Practica1 from './components/Practica1';
import Practica2 from './components/Practica2';
import Practica3 from './components/Practica3';
import Practica4 from './components/Practica4';
import Pia from './components/Pia';

const App = () => {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/practica1" component={Practica1}/>
            <Route exact path="/practica2" component={Practica2}/>
            <Route exact path="/practica3" component={Practica3}/>
            <Route exact path="/practica4" component={Practica4}/>
            <Route exact path="/pia" component={Pia}/>
            <Route path="/" component={Practica1}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));