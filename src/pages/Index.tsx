import React from 'react';
import { Query, QueryResult } from 'react-apollo';

import CURRENT_USER, { ICurrentUser } from '../apollo/queries/currentUser';
import Loader from '../components/Loader';

const IndexPage: React.FC = () => {
  return (
    <Query query={CURRENT_USER}>
      {(query: QueryResult<ICurrentUser>) => {
        const { loading, data } = query;
        if (loading) {
          return <Loader />;
        } else if (data) {
          return <h1>Hello, {data.currentUser.name}!</h1>;
        }
        return <h1>Error!</h1>;
      }}
    </Query>
  );
};

export default IndexPage;
