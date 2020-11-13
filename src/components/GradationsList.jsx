import React from 'react';
import {Gradation} from '.'

const GradationsList = (props) => {
  console.log('props',props)
  return(
    <div>
      {props.gradationsProperty.map((value, index) =>
        <Gradation gradationProperty={value} index={index} key={index.toString()} />
      )}
    </div>
  )
}

export default GradationsList;
