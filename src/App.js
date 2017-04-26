import React, { Component } from 'react';
import Header from './components/common/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid content">
          {/*MAY BE FIXED*/}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
