import React, { Component } from 'react';

import { Title } from './Title';

export class Unit extends Component {
  render() {
    return (
      <div className="row">
        <Title text={this.props.title}/>
        <hr></hr>
        <div className="row">
          <div className="col-md-3">

          </div>
          <div className="col-md-9">

          </div>  
        </div>
      </div>
    );
  }
}