import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username:$username, email: $email, password: $password) {
      token
      user{ 
        _id 
        email
        username
      }
    }
  }
`;

export const SAVE_USER_POST = gql`
  mutation savePost($newPost : PostInput!) {
    savePost(newPost : $newPost) {
      _id
      username
      savedPosts{
        description
        title
      }
    }
  }
`;
export const SAVE_POST_DB = gql`
  mutation savePostToDB($title : String!, $description : String!) {
    savePostToDB(title : $title, description : $description) {
        description
        title
    }
  }
`;
