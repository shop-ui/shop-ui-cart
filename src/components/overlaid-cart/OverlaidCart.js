import React from 'react'
import Component from '@flute-ui/component'
import OverlaidPanel from '../overlaid-panel/OverlaidPanel'
import OverlaidCartDetails from '../overlaid-cart-details/OverlaidCartDetails'

import './OverlaidCart.css'

export default class OverlaidCart extends React.Component {

  static defaultProps = {
    open: false
  }

  render () {

    const model = {
      overlaidPanel: {
        open: this.props.open
      }
    }

    return (
      <Component className="sui-OverlaidCart" {...this} {...model}>
        <OverlaidPanel {...model.overlaidPanel}>
          <OverlaidCartDetails />
        </OverlaidPanel>
      </Component>
    )
  }
}
