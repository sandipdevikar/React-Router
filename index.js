import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Register from './component/Register';
import Person from './component/Person'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      Hello
        <Route exact path="/" component={Register}/>
        <Route exact path="/sandip/:id" component={Person}/>
      </div>
    );
  }
}

render(<Router><App /></Router>, document.getElementById('root'));
