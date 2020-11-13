import React from 'react';
import {Gradation} from '.'

const GradationsList = (props) => {
  console.log('GradationListProps',props)
  return(
    <div>
      {props.gradationsProperty.map((value, index) =>
        <Gradation gradationProperty={value} index={index} selectCopy={props.selectCopy}  key={index.toString()} />
      )}
    </div>
  )
}

export default GradationsList;
