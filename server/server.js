const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/schema-index');
const { authMiddleware } = require('./utils/auth');


const app = express();
const PORT = process.env.PORT || 3001;
// uses the apollo server with typedefs and resolvers

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  //first message stated I needed await server.start; found info here: https://www.apollographql.com/docs/apollo-server/integrations/middleware/
  await server.start();

  // await app.listen(4000);
  //console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

  server.applyMiddleware({ app });
};

startApolloServer(typeDefs, resolvers);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });
// aplies middleware for apollo server
// server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
