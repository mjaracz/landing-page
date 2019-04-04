import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import store from './redux/store';

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import NaturalPage from "./NaturalPage/NaturalPage";
import RegionalPage from "./RegionalPage/RegionalPage";
import SeasonalPage from "./SeasonalPage/SeasonalPage";
import SignIn from "./SignIn/SignIn/SignIn";
import SignUp from "./SignIn/SignUp/SignUp";


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="container">
            <Header/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/NaturalPage" component={NaturalPage} />
              <Route path="/RegionalPage" component={RegionalPage} />
              <Route path="/SeasonalPage" component={SeasonalPage} />
              <Route path="/signIn" component={SignIn}/>
              <Route path="/signUp" component={SignUp}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
