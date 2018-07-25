import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  logo: {
    float: 'left',
    marginRight: 20,
    fontSize: 32,
    title: {
      float: 'left',
      fontWeight: 300,
      position: 'relative',
      top: 5,
    },
  },
  navs: {
    float: 'right',
  },
};

const MainNav = classes => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
      <div style={{display: 'flex',
      justifyContent: 'space-between', width: '100%'}}>
        <div className={classes.flex}>

          <i style={styles.logo} className="material-icons">
            ?
          </i>
          <Typography style={styles.logo.title} variant="title" color="inherit">
            Knack 2 Baybee
          </Typography>
        </div>
        <div style={styles.navs}>About Portfolio Contact</div>
      </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(MainNav);
