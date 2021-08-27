import React from 'react'
import './App.css';
import Kanye from './components/Kanye';

// 💪 Exercise: (2 min)
// 1. Refactor App from a functional component to class-based
// 2. Add an empty componentDidMount() lifecycle method

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>AJAX Lesson</h1>
        <Kanye />
      </div>
    );
  }
}

export default App;
