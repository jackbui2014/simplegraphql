const _ = require('lodash');
const Query = require('./resolvers/query');
const Session = require('./resolvers/session');
const Mutation = require('./resolvers/mutation');
const resolvers = {
  Query,
  Session,
  Mutation,
  Room: {
    EUROPA: 'Europa',
    SOL: 'Sol'
  },
  SessionOrError: {
    __resolveType(obj){
      console.log(obj);
      if( obj.code ){
        return 'Error';
      }
      return 'Session';
    }
  }
}
module.exports = resolvers;