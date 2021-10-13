const { ApolloServer, gql } = require('apollo-server');
const { ApolloError } = require('apollo-server-errors');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');
const sessions = require('./data/sessions.json');
const PORT = process.env.PORT || 4000;

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers');


const dataSources = () => ({
  SessionAPI: new SessionAPI(),
  SpeakerAPI: new SpeakerAPI()
});
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  dataSources, 
  debug: false,
  formatError:(err)=>{
    if( err.extensions.code == 'INTERNAL_SERVER_ERROR' ){
      return new ApolloError("We are having some trouble", "ERROR", {token: 'uquietoken'});
    }
    return err;
  },
  engine:{
    graphVariant: 'current'
  }
});

server
  .listen(PORT)
  .then(({ url }) => {
    console.log(`graphQL is running at port: ${PORT}`);
  })