const { AuthenticationError } = require('apollo-server-express');
const { User, PostDB } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    AllPosts: async (parent, args, context) => {
        temp = [];
        const x = await PostDB.find({});
        console.log(x);

        return x;

      
    },
  },

  Mutation: {
    async login(parent, {email, password}, context) {
      //Find User based on credentials 
      console.log("resolve login");

      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      //Check with hook
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('PassWord Error');
      }
      //Auth 
      const token = signToken(user);

      return { token, user };
    },
    async addUser(parent , { username, email, password }) {
      //Find a user based on the input
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Save Post to User
      async savePost(parent, { newPost }, context) {

      if (context.user) {
        //Tries to find the user and append the book to the array
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedPosts: newPost } },
          { 
            new: true,
            runValidators: true 
          }
        );
        //Returns the updated user
        return updatedUser;
      } 
      else {
        throw new AuthenticationError('SaveBook Error');
      }
    },
    // Save Post to DB
    async savePostToDB(parent, { ...stuff }, context) {
      if (context.user) {
        const post = await PostDB.create( stuff );
        return post;
      } 
      else {
        throw new AuthenticationError('Error');
      }
    },
  }
};

module.exports = resolvers;
