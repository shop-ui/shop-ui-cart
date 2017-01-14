/* global describe, it */

import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {OverlaidCart} from '../../index'
import OverlaidPanel from '../overlaid-panel/OverlaidPanel'
import OverlaidCartDetails from '../overlaid-cart-details/OverlaidCartDetails.js'

describe('<OverlaidCart />', function () {

  it('should not blow up when rendered', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidCart/>)

    expected.componentWasRendered = true
    actual.componentWasRendered = component.length === 1

    expect(actual).to.eql(expected)
  })

  it('should contain the OverlaidCartDetail within an OverlaidPanel', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidCart/>)

    expected.cartIsInsideOverlaidPanel = true
    actual.cartIsInsideOverlaidPanel = component.find(OverlaidPanel).find(OverlaidCartDetails).length === 1

    expect(actual).to.eql(expected)
  })

  it('should be closed by default', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidCart />)

    expected.cartIsClosed = true
    actual.cartIsClosed = component.find(OverlaidPanel).prop('open') === false

    expect(actual).to.eql(expected)
  })

  it('should be open if the `open` prop has been set to a value of `true`', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidCart open />)

    expected.cartIsOpen = true
    actual.cartIsOpen = component.find(OverlaidPanel).prop('open') === true

    expect(actual).to.eql(expected)
  })

  it('should close when the `open` prop is set to `false`', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidCart open />)

    component.setProps({open: false})

    actual.isClosed = component.find(OverlaidPanel).prop('open') === false
    expected.isClosed = true

    expect(actual).to.eql(expected)
  })

})
