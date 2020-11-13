import React from 'react';

const Gradation = (props) => {
  const style = {
    background: `linear-gradient(${props.gradationProperty})`
  };
  return(
    <div style={style}>
      グラデーション
    </div>
  )
}

export default Gradation;
