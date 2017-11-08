import React, { Component } from 'react';
import GraphBar from "./GraphBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GraphBar label={"Cats"} value={this.}/>
        <GraphBar label={"Dogs"} value={4}/>
      </div>
    );
  }
}

export default App;
