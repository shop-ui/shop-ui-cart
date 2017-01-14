/* global describe, it */

import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import OverlaidCartDetails from '../overlaid-cart-details/OverlaidCartDetails.js'

describe('<OverlaidCartDetails />', function () {

  it('should not blow up when rendered', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidCartDetails/>)

    expected.componentWasRendered = true
    actual.componentWasRendered = component.length === 1

    expect(actual).to.eql(expected)
  })

})
