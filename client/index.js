import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MainNav from './components/navbar';
import Top from './components/top';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';


const App = () => (
  <MuiThemeProvider>
    <div className="Site" >
      <MainNav />
    </div>
    <div className="Site-content">
      <Top />
      <About />
      <Portfolio />
      <Contact />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
