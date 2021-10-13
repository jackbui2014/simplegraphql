const _ = require('lodash');
const { ApolloError } = require('apollo-server-errors');

module.exports = {
  async speakers(session, args, { dataSources }, info ){
    try{
      const speakers = await dataSources.SpeakerAPI.getSpeakers();
      const returns = speakers.filter((speaker)=>{
        return _.filter(session.speakers, {id: speaker.id}).length > 0;
      });
      return returns;
    }catch(error){
      return new ApolloError("Unable to get speakers", "SPEAKERERROR", {token: "unique token"});
    }
    
  }
}