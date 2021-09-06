const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { PostDB } = require("./models");
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();



  const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
  });
  apolloServer.start();
  apolloServer.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('/allposts', (req, res) => {
  PostDB.find({}).then((data)=>{
    res.json(data)
    //console.log(data);
  })
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
});
