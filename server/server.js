const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const PORT = 3005;
mongoose.connect(
  'mongodb://127.0.0.1:27017/graphql-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  (err) => {
    if (err) throw err;
    console.log('Mongo connected!');
  }
);

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
