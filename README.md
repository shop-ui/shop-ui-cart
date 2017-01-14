# shop-ui-cart

[![CircleCI branch](https://img.shields.io/circleci/project/github/shop-ui/shop-ui-cart/master.svg)](https://circleci.com/gh/shop-ui/shop-ui-cart)
[![Coverall Test Coverage](https://img.shields.io/coveralls/shop-ui/shop-ui-cart/master.svg)](https://coveralls.io/github/shop-ui/shop-ui-cart)
[![Code Climate](https://codeclimate.com/github/shop-ui/shop-ui-cart/badges/gpa.svg)](https://codeclimate.com/github/shop-ui/shop-ui-cart)
[![Dependency Status](https://www.versioneye.com/user/projects/581a0a0289f0a91d55eb925f/badge.svg)](https://www.versioneye.com/user/projects/581a0a0289f0a91d55eb925f)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A Shop UI cart module

## Installation 

```
npm install -S @shop-ui/cart
```

NOTE: As this is a work in progress, it is not yet on NPM

## Usage 

```js
import React from 'react'
import {OverlaidCart} from '@shop-ui/cart'

export class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cartIsOpen: false
    }
  }
  
  render () {
    return (
      <div>
        <button onClick={()=>this.handleShowCartBtnClick()}>Show Cart</button>
        <OverlaidCart open={this.state.open} />
      </div>
    )
  }
  
  handleShowCartBtnClick () {
    this.setState({
      cartIsOpen: true
    })
  }
}

```

## Setting up for development after cloning /  forking the project 

```
npm run setup
```

Do this instead of `npm install` as this will not only install the module 
dependencies, but will also install the demo dependencies


## Running the Demo

```
npm run demo
```

## Running the demo in watch mode

```
npm run build:watch
npm run demo
```

## All available commands

* `npm run setup` - install dependencies for both the module and the demo app (as opposed to just the module dependencies).
* `npm run build` - build the lib files
* `npm run build` - build the lib files in watch mode
* `npm run demo` - build the lib files and then run the demo. The demo will be opened in the browser window
* `npm run coverage` - view the code coverage report in the command line
* `npm run coverage:view` - view the code coverage report in the browser
* `npm run test` - run unit tests
* `npm run test:watch` -  run unit tests in watch mode
* `npm run lint` - run eslint
* `npm run lint:watch` -  run eslint in watch mode
