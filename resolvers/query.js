const _ = require('lodash');
module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.SessionAPI.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    try{
      return dataSources.SessionAPI.getSessionById(id)
    }catch(err){
      return {code: 'ERROR', message: 'error message', token: 'unique token'};
    }

  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.SpeakerAPI.getSpeakers();
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.SpeakerAPI.getSpeakerById(id)
  }
};