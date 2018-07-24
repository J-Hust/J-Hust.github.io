import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  topPic: {
    width: '50%',
    height: '50vw',
    'background-color': '#e0e0e0',
  },
};

const Top = classes => (
  <div className="please">
    <h2>Hi, I'm Justin. I'm a software developer.</h2>
  </div>
);

export default withStyles(styles)(Top);
