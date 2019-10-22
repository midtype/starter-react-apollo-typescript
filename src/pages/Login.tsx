import React from 'react';
import qs from 'query-string';
import { Redirect, withRouter, RouteComponentProps } from 'react-router';

import './Login.css';
import { setJWT } from '../utils/jwt';
import Loader from '../components/Loader';

const SIGN_IN_LINK = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=310346463088-u5mebbn91d619r4poms613jvssm1gevn.apps.googleusercontent.com&redirect_uri=https://api.midtype.com/login&access_type=offline&state=name%3D${process.env.REACT_APP_MY_APP_ID}%26redirect%3D${process.env.REACT_APP_MY_APP_REDIRECT_URL}&scope=profile%20email`;

const LoginPage: React.FC<RouteComponentProps> = props => {
  // Use React Routers' location function to get the query parameters in the URL.
  // Then check if we have a JWT included as a query parameter.
  const { location, history } = props;
  const { jwt } = qs.parse(location.search);

  // If we have a JWT, save it to local storage so that we can include it in all
  // requests to our API from here on.
  if (jwt && typeof jwt === 'string') {
    setJWT(jwt);
    history.push('/');
  }

  const loading = false;
  const authorized = false;

  if (loading) {
    return <Loader />;
  }
  return authorized ? (
    <Redirect to="/" />
  ) : (
    <div className="login">
      <h2>Sign in.</h2>
      <p>Sign into {process.env.REACT_APP_MY_APP_NAME} with Google.</p>
      <a href={SIGN_IN_LINK}>
        <img
          className="login__google-sign-in"
          src="/images/google-sign-in.png"
          alt="Google sign in link."
        />
      </a>
    </div>
  );
};

export default withRouter(LoginPage);
