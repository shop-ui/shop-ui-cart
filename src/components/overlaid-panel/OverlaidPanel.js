import React from 'react'
import Component from '@flute-ui/component'
import {IS_OPEN} from '../../constants'

import './OverlaidPanel.css'

export default class OverlaidPanel extends React.Component {

  static defaultProps = {
    open: false,
    onOverlayClick: (instance) => {
      instance.close()
    }
  }

  state = {
    forceClose: false
  }

  render () {

    const model = {
      classes: {
        [IS_OPEN]: !this.state.forceClose && this.props.open
      }
    }

    return (
      <Component className="sui-OverlaidPanel" {...this} {...model}>
        <div className="sui-OverlaidPanel-overlay" onClick={() => this.props.onOverlayClick(this)} />
        <div className="sui-OverlaidPanel-pane">
          {this.props.children}
        </div>
      </Component>
    )
  }

  close () {
    this.setState({forceClose: true}, () => {
      // HACK: Need to reset the state without triggering a rerender so that the component
      // can be opened once again via props
      this.state.forceClose = false // eslint-disable-line react/no-direct-mutation-state

    })
  }
}
