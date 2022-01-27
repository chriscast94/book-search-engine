const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                //const userData = await User.findOne({ _id: context.user_id }).select("-_v - password");
                return User.findOne({ _id: context.user_id }).select("-_v - password");
            } throw new AuthenticationError("You need to be logged!");
        },
    },

    Mutation: {
        addUser: async (parents, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Scream! No user found!!!!");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!!correctPw) {
                throw new AuthenticationError("Alert! Wrong Password!")
            }

            const token = signToken(user);

            return { token, user };
        },
        //save book mutation
    }
}