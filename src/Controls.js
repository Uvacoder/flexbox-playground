import React, { Component } from 'react'

export default class Controls extends Component {
  constructor (props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    this.props.onChange(this.props.flexProperty, e.target.value)
  }
  
  render() {
    return (
        <div className="pa2" key={this.props.flexProperty}>
          <label className="dib w5 mr2 tr">{this.props.flexProperty}:</label>
          <select name={this.props.flexProperty} value={this.props.value} onChange={this.handleChange}>
            {this.props.flexValues.map(it => <option value={it} key={it}>{it}</option>)}
          </select>
        </div>
      )
    }
  }
