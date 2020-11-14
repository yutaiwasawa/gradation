import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import '@simonwep/pickr/dist/themes/nano.min.css';
import GPickr from '@simonwep/pickr';
// import GPickr from '@simonwep/pickr/dist/pickr.es5.min';

const customMedia = generateMedia({
  sm: '481px',
  md: '769px'
})

window.onload = function() {
  const gpickr = new GPickr({
    el: '.gpickr',
    container: 'body',
    theme: 'nano', // or 'monolith', or 'nano'
    useAsButton: false,
    stops: [
        ['rgb(255,132,109)', 0],
        ['rgb(255,136,230)', 1]
    ]
  });

  gpickr.on('init', instance => {
    console.log('あーーーーー')
    console.log('init', instance);
  }).on('show', instance => {
    console.log('いーーーーー')
    console.log('show', instance);
  }).on('change', instance => {
    console.log('change', instance.getGradient());
  });
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

const valuetext = (value) => {
  return `${value}°C`;
}

const m = customMedia.greaterThan("md");

const GradationStatus = () => {
  const classes = useStyles();

  return(
    <div>
      <div className="status-border">
      <div className="gpickr"></div>

{/* <div className="entry">
  #shadow-root
  <div className="innr">
    <div className="another">
    #shadow-root
      <div className="pickr"></div>
    </div>
  </div>
</div> */}



        {/* <div className={classes.root}>
          <Typography id="track-false-slider" gutterBottom>
            Removed track
          </Typography>
          <Slider
            track={false}
            aria-labelledby="track-false-slider"
            getAriaValueText={valuetext}
            defaultValue={30}
            marks={marks}
          />
          <div className={classes.margin} />
          <Typography id="track-false-range-slider" gutterBottom>
            Removed track range slider
          </Typography>
          <Slider
            track={false}
            aria-labelledby="track-false-range-slider"
            getAriaValueText={valuetext}
            defaultValue={[20, 37, 50]}
            marks={marks}
          />
        </div> */}
      </div>
    </div>
  )
}

export default GradationStatus;


