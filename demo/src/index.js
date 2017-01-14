import React from 'react'
import ReactDOM from 'react-dom'
import {OverlaidCart} from '../../lib/index';

import './index.css';

class App extends React.Component {

  state = {
    isOpen: false
  }

  render() {
    return (
      <div className="Demo">
        <button onClick={()=> this.showCart()}>Show Cart</button>
        <OverlaidCart className="Demo-overlaidCart" open={this.state.isOpen}/>
      </div>
    )
  }

  showCart () {
    this.setState({
      isOpen: true
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
