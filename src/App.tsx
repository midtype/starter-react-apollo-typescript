import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Features from './pages/Features';
import Customers from './pages/Customers';
import Pricing from './pages/Pricing';
import Login from './pages/Login';

import Nav from './components/Nav';
import Loader from './components/Loader';
import CURRENT_USER from './apollo/queries/currentUser';

/**
 * There are some routes in our app that we only want logged in users to be able to
 * access. For those routes, we wrap them in a GraphQL query that checks if the user
 * is currently logged in. If not, we redirect them to the login page. To learn
 * more about the Apollo `<Query />` component, [see their documentation](https://www.apollographql.com/docs/react/essentials/queries/#the-query-component)
 */
const protect = (Page: React.FC): JSX.Element => (
  <Query query={CURRENT_USER}>
    {(query: QueryResult) => {
      const { loading, data } = query;
      if (loading) {
        return <Loader />;
      }
      return data ? <Page /> : <Redirect to="/login" />;
    }}
  </Query>
);

const App: React.FC = () => {
  const LoggedInNav = protect(Nav);
  return (
    <Router>
      {LoggedInNav}
      <main>
        <Route path="/" exact render={() => protect(Index)} />
        <Route path="/about" exact render={() => protect(About)} />
        <Route path="/features" exact render={() => protect(Features)} />
        <Route path="/customers" exact render={() => protect(Customers)} />
        <Route path="/pricing" exact render={() => protect(Pricing)} />
        <Route path="/login" exact component={Login} />
      </main>
    </Router>
  );
};

export default App;
