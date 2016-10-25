import React, { Component } from 'react';
import Controls from './Controls';
import FlexContainer from './FlexContainer';

class App extends Component {
  constructor(props) {
    super(props)

    const flexProps = {
      flexDirection: ['row','row-reverse','column','column-reverse'],
      flexWrap: ['nowrap','wrap','wrap-reverse'],
      justifyContent: ['flex-start','flex-end','center','space-between','space-around'],
      alignItems: ['flex-start','flex-end','center','stretch','baseline'],
      alignContent: ['flex-start','flex-end','center','stretch','space-between','space-around']
    }

    const childProps = {
      alignSelf: ['auto','flex-start','flex-end','center','baseline','stretch']
    }
    
    const containerProps = {}
    
    Object.keys(flexProps).forEach(property => {
      containerProps[property] = flexProps[property][0]
    })
    
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      flexProps,
      childProps,
      containerProps
    }
  }
  
  handleChange (prop, e) {
    const cp = this.state.containerProps
    cp[prop] = e
    
    this.setState({
      containerProps: cp
    })
  }

  render() {
    return (
      <div className="flex-auto flex flex-column">
        {
          Object.keys(this.state.flexProps).map(flexProperty => {
            
            return <Controls key={flexProperty} flexProperty={flexProperty} flexValues={this.state.flexProps[flexProperty]} value={this.state.containerProps[flexProperty]} onChange={this.handleChange} />
            
          })
        }
        
        <FlexContainer containerProps={this.state.containerProps} itemProps={this.state.childProps} />
      </div>
    );
  }
}

export default App;
