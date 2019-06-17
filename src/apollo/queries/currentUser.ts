import { gql } from 'apollo-boost';

export default gql`
  {
    currentUser {
      id
      name
      email
      photoUrl
    }
  }
`;

export interface ICurrentUser {
  currentUser: {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
  };
}
