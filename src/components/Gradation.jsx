import React from 'react';
import App from '../App';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const Gradation = (props) => {
  console.log('GradationProps', props.index)
  const style = {
    background: `linear-gradient(${props.gradationProperty})`
  };
  return(
    <div className="gradation-color" id={`gradation-color-${props.index}`} style={style}>
      <div className="copy-btn" onClick={() => props.selectCopy(props.index)}>
        <FileCopyOutlinedIcon /><span className="copy-text">COPY CSS</span>
      </div>

        {/* <Tooltip title="Copy">
          <IconButton aria-label="copy">
            <FileCopyOutlinedIcon />
          </IconButton>
        </Tooltip> */}
        <input id={`copy-target-${props.index}`} type="text" value={`background: ${style.background}`} readOnly></input>
    </div>
  )
}

export default Gradation;
