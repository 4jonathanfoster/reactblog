import { gql } from '@apollo/client';

//User Getter
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedPosts{
        comments
        description
        title
      }
    }
  }
`;
