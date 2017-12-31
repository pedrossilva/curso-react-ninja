import React from 'react';

const Square = ({color = "red"}) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} />
)

export default Square;