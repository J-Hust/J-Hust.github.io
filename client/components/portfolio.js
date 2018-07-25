import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = {};

const Portfolio = classes => (
  <div>
    <h2>My Portfolio</h2>
    <Divider />
    <Grid container spacing={40}>
      <Grid item lg={3}>
        Code Map
      </Grid>
      <Grid item lg={3}>
        Metal Compendium
      </Grid>
      <Grid item lg={3}>
        Eaglefox Shopper
      </Grid>
    </Grid>
  </div>
);

export default Portfolio;
