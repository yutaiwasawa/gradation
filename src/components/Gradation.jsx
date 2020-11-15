import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
// import {GradationStatus} from '.';

const customMedia = generateMedia({
  sm: '481px',
  md: '769px'
})

const m = customMedia.greaterThan("md");

const WrapGradation = styled.div`
  position: relative;
  width: 100%;

  .gradation-color {
    align-items: center;
    border-radius: .6rem;
    display: flex;
    height: 25rem;
    justify-content: center;

    ${m`
      border-radius: 14px;
      height: 250px;
    `}

    &:hover {

      .copy-btn {
        opacity: 1;
      }
    }
  } // .gradation-color

  .copy-btn {
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    justify-content: center;
    opacity: 0;
    transition: all .1s linear;

    &:hover {

      .copy-text {
        text-shadow: 1px 1px 4px rgba(0, 0, 0, .3);
      }
    }
  } // .copy-btn

  .copy-text {
    margin: 0 0 0 5px;
    transition: all .1s linear;
  }

  .copy-target{
    opacity: 0;
    position: absolute;
    top: 0;
  }
`

const Gradation = (props) => {
  const style = {
    background: `linear-gradient(${props.gradationProperty})`
  };
  return(
    <WrapGradation>
      <div className="gradation-color" id={`gradation-color-${props.index}`} style={style}>
        <div className="copy-btn" id={`copy-btn-${props.index}`} onClick={() => props.copyToClipboard(props.index)}>
          <FileCopyOutlinedIcon /><span className="copy-text">CSS COPY</span>
          <input id={`copy-target-${props.index}`} className="copy-target" type="text" value={`background: ${style.background}`} readOnly></input>
        </div>
      </div>
      {/* <GradationStatus /> */}
    </WrapGradation>
  )
}

export default Gradation;
