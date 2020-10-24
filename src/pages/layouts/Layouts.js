// Libs
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Discover from '../discover/discover';
import Book from '../book/book';

class Layouts extends Component {
  renderPages = () => (
    <Switch>
      <Route
        exact
        path="/discover"
        render={(props) => (
          <Discover {...props} />
        )}
      />
      <Route
        exact
        path="/book/:bookId"
        render={(props) => (
          <Book {...props} />
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <Redirect to="/discover" />
        )}
      />
    </Switch>
  )

  render() {
    return this.renderPages();
  }
}

export default Layouts;