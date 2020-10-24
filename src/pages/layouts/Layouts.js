// Libs
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Discover from '../discover/discover';
import Reading from '../reading/reading';
import Finished from '../finished/finished';
import Book from '../book/book';

// Components
import Navigation from '../../components/navigation';

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
        path="/reading"
        render={(props) => (
          <Reading {...props} />
        )}
      />
      <Route
        exact
        path="/finished"
        render={(props) => (
          <Finished {...props} />
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
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '70%',
          maxWidth: '1110px',
          margin: '2rem auto 0'
        }}
      >
        <Navigation />
        {this.renderPages()}
      </div>
    );
  }
}

export default Layouts;