const _ = require('lodash');
module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.SessionAPI.toggleFavoriteSession(id)
  },
  addNewSession: (parent, {session}, { dataSources }, info) => {
    return dataSources.SessionAPI.addSession(session)
  }
};