import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = {};

const About = classes => (
  <div >
    <h2 style={{alignContent: 'center'}}>About</h2>
    <Divider />
    <div className="aboutme">
      <div id="mypic">
        <img src="./public/IMG_7695_square.jpg" width="400" height="400" />
      </div>
      <div id="me">
        Some text goes here. Some paragraph about what it is I do and the kind
        of stuff I like. Then maybe some bullets with tech that I use and stuff.
        Blah blah. More text. Check out my portfolio below.
      </div>
    </div>
  </div>
);

export default About;
