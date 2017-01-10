import React from 'react'
import ReactDOM from 'react-dom'
import {OverlaidCart} from '../../lib/index';

import './index.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <button>Show Cart</button>
        <OverlaidCart/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
