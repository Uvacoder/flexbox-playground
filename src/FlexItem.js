import React, { Component } from 'react';

export default class FlexItem extends Component {
  constructor (props) {
    super(props)
    
    this.handleOrderChange = this.handleOrderChange.bind(this)
    this.handleGrowChange = this.handleGrowChange.bind(this)
    this.handleShrinkChange = this.handleShrinkChange.bind(this)
    this.handleBasisChange = this.handleBasisChange.bind(this)
    this.handleAlignSelfChange = this.handleAlignSelfChange.bind(this)
    
    this.state = {
      order: 0,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      alignSelf: 'auto'
    }
  }
  
  handleOrderChange (e) {
    this.setState({ order: e.target.value })
    console.log('state is', this.state)
  }
  
  handleGrowChange (e) {
    this.setState({ flexGrow: e.target.value })
    console.log('state is', this.state)
  }
  
  handleShrinkChange (e) {
    this.setState({ flexShrink: e.target.value })
    console.log('state is', this.state)
  }
  
  handleBasisChange(e) {
    this.setState({ flexBasis: e.target.value })
    console.log('state is', this.state)
  }
  
  handleAlignSelfChange (e) {
    this.setState({ alignSelf: e.target.value })
    console.log('state is', this.state)
  }
  
  render() {
    const sx = Object.assign({}, this.state)
    return (
      <div className="pa1" style={sx}>
        <div className="br3 bg-blue pv3 pr2 pl0">
          <div className="mb3">
            <label className="w4 pr1 courier white f6 tr dib">order:</label>
            <input type="number" placeholder="order" className="dib courier w4 white bg-transparent outline-0 input-reset ba bw1 bt-0 br-0 bl-0 b--white" value={this.state.order} onChange={this.handleOrderChange} />
          </div>
          <div className="mb3">
            <label className="w4 pr1 courier white f6 tr dib">flexGrow:</label>
            <input type="text" placeholder="flex-grow" className="dib courier w4 white bg-transparent outline-0 input-reset ba bw1 bt-0 br-0 bl-0 b--white" value={this.state.flexGrow} onChange={this.handleGrowChange} />
          </div>
          <div className="mb3">
            <label className="w4 pr1 courier white f6 tr dib">flexShrink:</label>
            <input type="text" placeholder="flex-shrink" className="dib courier w4 white bg-transparent outline-0 input-reset ba bw1 bt-0 br-0 bl-0 b--white" value={this.state.flexShrink} onChange={this.handleShrinkChange} />
          </div>
          <div className="mb3">
            <label className="w4 pr1 courier white f6 tr dib">flexBasis:</label>
            <input type="text" placeholder="flex-basis" className="dib courier w4 white bg-transparent outline-0 input-reset ba bw1 bt-0 br-0 bl-0 b--white" value={this.state.flexBasis} onChange={this.handleBasisChange} />
          </div>
          <div>
            <label className="w4 pr1 courier white f6 tr dib">alignSelf:</label>
            <select name="alignSelf" className="dib courier white bg-transparent w4 outline-0 input-reset br0 ba bw1 bt-0 br-0 bl-0 b--white" value={this.state.alignSelf} onChange={this.handleAlignSelfChange}>
              {this.props.itemProps.alignSelf.map(it => <option value={it} key={it}>{it}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}
