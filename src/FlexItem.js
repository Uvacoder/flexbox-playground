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
  }
  
  handleGrowChange (e) {
    this.setState({ flexGrow: e.target.value })
  }
  
  handleShrinkChange (e) {
    this.setState({ flexShrink: e.target.value })
  }
  
  handleBasisChange(e) {
    this.setState({ flexBasis: e.target.value })
  }
  
  handleAlignSelfChange (e) {
    this.setState({ alignSelf: e.target.value })
  }
  
  render() {
    
    const sx = Object.assign({}, this.state)
    const inputClassNames = "dib courier white bg-transparent w4 outline-0 input-reset br0 ba bw1 bt-0 br-0 bl-0 b--white"
    const labelClassNames = "w4 pr1 courier white f6 tr dib"
    
    return (
      <div className="pa1" style={sx}>
        <div className="br3 bg-blue pv3 pr2 pl0 h-100">
          <div className="mb3">
            <label className={labelClassNames}>order:</label>
            <input type="number" placeholder="order" className={inputClassNames} value={this.state.order} onChange={this.handleOrderChange} />
          </div>
          <div className="mb3">
            <label className={labelClassNames}>flexGrow:</label>
            <input type="text" placeholder="flex-grow" className={inputClassNames} value={this.state.flexGrow} onChange={this.handleGrowChange} />
          </div>
          <div className="mb3">
            <label className={labelClassNames}>flexShrink:</label>
            <input type="text" placeholder="flex-shrink" className={inputClassNames} value={this.state.flexShrink} onChange={this.handleShrinkChange} />
          </div>
          <div className="mb3">
            <label className={labelClassNames}>flexBasis:</label>
            <input type="text" placeholder="flex-basis" className={inputClassNames} value={this.state.flexBasis} onChange={this.handleBasisChange} />
          </div>
          <div>
            <label className={labelClassNames}>alignSelf:</label>
            <select name="alignSelf" className={inputClassNames} value={this.state.alignSelf} onChange={this.handleAlignSelfChange}>
              {this.props.itemProps.alignSelf.map(it => <option value={it} key={it}>{it}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}
