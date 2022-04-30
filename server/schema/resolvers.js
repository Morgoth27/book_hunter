const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        .populate('savedBooks');
    
        return userData;
      }
      throw new AuthenticationError("Please log in.");
    },

    users: async () => {
      return await User.find({}).populate('users');
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect email, please try again.");
      };

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) throw new AuthenticationError("Incorrect password.");
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              savedBooks: bookData,
            },
          },
          {
           // Return the newly updated object instead of the original
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("Please log in.");
    },

    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { $pull: { savedBooks: { bookId: bookId } }}, 
          // Return the newly updated object instead of the original
          { new: true }
        );

        return userData;
      }
      throw new AuthenticationError("Please log in.");
    },
  },
};

module.exports = resolvers;