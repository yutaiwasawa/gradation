import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const customMedia = generateMedia({
  sm: '481px',
  md: '769px'
})

const m = customMedia.greaterThan("md");

const WrapGradation = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  padding: .2rem;
  width: 100%;

  ${m`
    border-radius: 12px;
    padding: 10px;
  `}

  /* margin-right: 30px;
    margin-bottom: 20px;

    &::nth-of-type(3n) {
      margin-right: 0
    } */

  .gradation-color {
    border-radius: .6rem;
    height: 25rem;

    ${m`
      border-radius: 6px;
      height: 250px;
    `}
  } // .gradation-color
`

const Gradation = (props) => {
  console.log('GradationProps', props.index)
  const style = {
    background: `linear-gradient(${props.gradationProperty})`
  };
  return(
    <WrapGradation>
      <div className="gradation-color" id={`gradation-color-${props.index}`} style={style}>
        <div className="copy-btn" id={`copy-btn-${props.index}`} onClick={() => props.copyToClipboard(props.index)}>
          <FileCopyOutlinedIcon /><span className="copy-text">CSS COPY</span>
        </div>
          <input id={`copy-target-${props.index}`} type="text" value={`background: ${style.background}`} readOnly></input>
      </div>
    </WrapGradation>
  )
}

export default Gradation;
