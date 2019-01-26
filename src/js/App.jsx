import React, { Component } from 'react';

import { Unit } from './Unit';
import { Title } from './Title';
import { Home } from './Home';
import { NavbarLink } from './Navbar';

import { BrowserRouter, Route } from 'react-router-dom'  

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <nav className="navbar navbar-light bg-light mr-auto fixed-top">
              <ul className="navbar-nav">
                <NavbarLink link="/" text="Home"/>
                <NavbarLink link="/title" text="Title"/>
                <NavbarLink link="/unit" text="Unit"/>
              </ul>
            </nav>
          </div>
          <Route exact path="/" component={Home}/>
          <Route 
            path="/title"
            render={(props) => <Title text="Hello"/>}
          />
          <Route path="/unit" component={Unit}/>
        </div>
      </BrowserRouter>
    );
  }
}