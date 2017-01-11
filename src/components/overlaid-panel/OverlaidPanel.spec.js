/* global describe, it */

import React from 'react'
import {expect} from 'chai'
import {shallow, render, mount} from 'enzyme'
import OverlaidPanel from './OverlaidPanel'

import {IS_OPEN} from '../../constants'

describe('<OverlaidPanel />', function () {

  it('should should not blow up', function () {
    const actual = {}
    const expected = {}
    const component = shallow(<OverlaidPanel />)

    expected.componentWasRendered = true
    actual.componentWasRendered = component.length === 1

    expect(actual).to.eql(expected)
  })

  it('should be closed by default', function () {
    const actual = {}
    const expected = {}
    const component = mount(<OverlaidPanel />)

    expected.isClosedByDefault = true
    actual.isClosedByDefault = !component.hasClass(IS_OPEN)

    expect(actual).to.eql(expected)
  })

  it('should open when the `open` prop is set to `true`', function () {
    const actual = {}
    const expected = {}
    const component = mount(<OverlaidPanel open />)

    expected.cartIsOpen = true
    actual.cartIsOpen = component.hasClass(IS_OPEN)

    expect(actual).to.eql(expected)
  })

  it('should contain the wrapped component as children', function () {
    const actual = {}
    const expected = {}
    const component = render(
      <OverlaidPanel>
        <div className="panel-children">...</div>
      </OverlaidPanel>
    )

    expected.containsWrappedChildren = true
    actual.containsWrappedChildren = component.find('.panel-children').length === 1

    expect(actual).to.eql(expected)
  })

  it('should close the component when the overlay is clicked', function () {
    const actual = {}
    const expected = { }
    const component = mount(<OverlaidPanel open />)
    const overlay = component.find('.sui-OverlaidPanel-overlay')

    expected.componentIsOpenBeforeOverlayClick = true
    expected.componentIsOpenAfterOverlayClick = false

    actual.componentIsOpenBeforeOverlayClick = component.hasClass(IS_OPEN)

    overlay.simulate('click')

    actual.componentIsOpenAfterOverlayClick = component.hasClass(IS_OPEN)

    expect(actual).to.eql(expected)
  })

})
