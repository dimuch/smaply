import React, {Suspense, useState, useEffect} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import './App.scss';
import TopOrganizationHeader from './components/top-organization-header/TopOrganizationHeader';

import routes from './routes/routes';
import LinearProgress from '@material-ui/core/LinearProgress';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['"Source Sans Pro"', 'Open Sans'].join(',')
    }
  })

  return (
    <div className="smaply-test-app">
      <ThemeProvider theme={theme}>
        <TopOrganizationHeader/>
        <Suspense fallback={<LinearProgress/>}>
          <Router>
            <Switch>
              {routes.map((route) => {
                const Component = route.component;
                return (
                  <Route path={route.path} exact={route.exact} key={route.path}>
                    <Component/>
                  </Route>
                )
              })}
            </Switch>
          </Router>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
