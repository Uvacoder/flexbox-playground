import React from 'react';
import FlexItem from './FlexItem';

const FlexContainer = ({
  ...props
}) => {

  const sx = Object.assign({}, props.containerProps)
  const itemProps = Object.assign({}, props.itemProps)

  return (
    <div className="pv4 ph3 bt bb b--black-10 bg-light-gray flex flex-auto" style={sx}>
      <FlexItem itemProps={itemProps} />
      <FlexItem itemProps={itemProps} />
      <FlexItem itemProps={itemProps} />
      <FlexItem itemProps={itemProps} />
    </div>
  )
}

export default FlexContainer