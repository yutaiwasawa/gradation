import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const customMedia = generateMedia({
  sm: '481px',
  md: '769px'
})

const m = customMedia.greaterThan("md");

const GradationStatus = () => {
  return(
    <div>
      ステータス
    </div>
  )
}

export default GradationStatus;


