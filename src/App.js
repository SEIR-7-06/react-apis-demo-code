import React from 'react'
import './App.css';
import Kanye from './components/Kanye';
import Villagers from './components/Villagers';

// 💪 Exercise: (2 min)
// 1. Refactor App from a functional component to class-based
// 2. Add an empty componentDidMount() lifecycle method

class App extends React.Component {
  state = {
    isKanyeHidden: true
  }

  toggleKanye = () => {
    this.setState({
      isKanyeHidden: !this.state.isKanyeHidden
    })
  }
  // Conditional rendering is rendering(or not rendering) a component
  // based on some condition
  render() {
    return (
      <div className="App">
        <h1>AJAX Lesson</h1>

        <button onClick={this.toggleKanye}>Kanye</button>
        <hr/>
        {/* Ternary Statement - a single-line if-else statement */}
        { this.state.isKanyeHidden ? "" : <Kanye /> }
        <Villagers />
      </div>
    );
  }
}

export default App;
