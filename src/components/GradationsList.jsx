import React from 'react';
import {Gradation} from '.'

const GradationsList = (props) => {
  console.log('GradationListProps',props)
  return(
    <div>
      {props.gradationsProperty.map((value, index) =>
        <Gradation gradationProperty={value} index={index} copyToClipboard={props.copyToClipboard} key={index.toString()} />
      )}
    </div>
  )
}

export default GradationsList;
