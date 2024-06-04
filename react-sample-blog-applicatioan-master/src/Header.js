import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <header className="intro-header ttt" >
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="site-heading">
                          <h1>Hello,</h1>
                          <hr className="small" />
                          <span className="subheading"> Moon's Blog </span>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}
