import React, { Component } from 'react';
import Controls from './Controls';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Controls />
        <p>This is some text to make sure my React app works.</p>
      </div>
    );
  }
}

export default App;
