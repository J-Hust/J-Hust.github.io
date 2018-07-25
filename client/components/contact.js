import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const styles = {};

const Contact = classes => (
  <div>
    <h2>Contact Me</h2>
    <Divider />
    <List>
      <ListItem>
        <ListItemText primary="GitHub" />
      </ListItem>
      <ListItem>
        <ListItemText primary="LinkedIn" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Email" />
      </ListItem>
    </List>
  </div>
);

export default Contact;
