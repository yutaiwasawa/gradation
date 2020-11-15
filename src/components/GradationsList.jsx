import React from 'react';
import {Gradation} from '.'
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import {scssVariables as v} from '../variables';

const customMedia = generateMedia({
  sm: '481px',
  md: '769px'
})

const m = customMedia.greaterThan("md");

const GradationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${m`
    grid-template-columns: repeat(3, 1fr);
  `}


  color: ${v.$fontColor};
  margin: 100px;

  li {
    margin: 4rem 0 0 0;

    ${m`
      margin: 40px 20px 0 20px;
    `}

    &:nth-of-type(3n+1) {
      margin: 4rem 0 0 0;

      ${m`
        margin: 40px 20px 0 0;
      `}
    }

    &:nth-of-type(3n) {
      margin: 4rem 0 0 0;

      ${m`
        margin: 40px 0 0 20px;
      `}
    }

    ${m`
      // width: 100%;
    `}
  }
`

const GradationsList = (props) => {
  console.log('GradationListProps',props)
  return(
    <div>
      <GradationList>
      {props.gradationsProperty.map((value, index) =>
        <li key={index.toString()} >
          <Gradation gradationProperty={value} index={index} copyToClipboard={props.copyToClipboard} />
        </li>
      )}
      </GradationList>
    </div>
  )
}

export default GradationsList;
