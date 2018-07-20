import React, { Component } from 'react';

import Greeting from './greeting';

// function App (props) {
//   return (<div>Hello from functional component</div>);
// }

// export default App;

class App extends Component {
  render () {
    return (<Greeting name="Bob" />);
  }
}

export default App;
