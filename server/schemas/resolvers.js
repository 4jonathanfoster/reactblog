const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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

      console.log(token);
      return { token, user };
    },
    async addUser(parent , { username, email, password }) {
      //Find a user based on the input
      console.log("resolve addUser");

      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log(token);

      return { token, user };
    },
  }
};

module.exports = resolvers;
