'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {['red', 'lightgray', 'red'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App
