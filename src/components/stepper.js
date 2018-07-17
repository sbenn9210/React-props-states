import React, { Component } from 'react'
import './styles.css'
export class Stepper extends Component {

  constructor(props) {
    super(props)

    this.state = {
      number : 0,
      disable: false
    }
  }
    addStep = (() => {
      let newNumber = this.state.number + 1
      this.setState({
        ...this.state,
        number: newNumber,
        disable: false
      })
    })

    subStep = (() => {
      let newNumber = this.state.number -1
      if (newNumber === 0) {
      this.setState({
        ...this.state,
        number: newNumber,
        disable: true
      })
    } else {
      this.setState({
        ...this.state,
        number: newNumber,
        disable: false
    })
  }
  })



  render() {

    return (
    <div id='container'>
      <button className="btn" onClick={this.subStep} disabled={this.state.disable}>-</button>
      <div id="display"><h1>{this.state.number}</h1></div>
      <button className="btn" onClick={this.addStep}>+</button>
    </div>
   )
  }
}
