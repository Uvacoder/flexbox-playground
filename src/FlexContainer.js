import React from 'react';
import FlexItem from './FlexItem';

const FlexContainer = ({
  ...props
}) => {

  const sx = Object.assign({}, props.containerProps)

  return (
    <div className="br3 pa2 h5 bg-light-gray flex" style={sx}>
      <FlexItem />
      <FlexItem />
      <FlexItem />
      <FlexItem />
    </div>
  )
}

export default FlexContainer