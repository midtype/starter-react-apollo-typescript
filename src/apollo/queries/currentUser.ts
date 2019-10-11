import { gql } from 'apollo-boost';

export default gql`
  {
    mUserInSession {
      id
      private {
        name
        email
        photoUrl
      }
    }
  }
`;

export interface ICurrentUser {
  mUserInSession: {
    id: string;
    private: {
      name: string;
      email: string;
      photoUrl: string;
    };
  };
}
