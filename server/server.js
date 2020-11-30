const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const app = express();

const schema = require('../schema/schema');

const PORT = 3005;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
