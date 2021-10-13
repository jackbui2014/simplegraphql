const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource{
  constructor(){
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }
  async getSpeakers(){
    const data =  await this.get('/');
    return data;
  }
  async getSpeakerById(id){
    const data1 = await this.get(`/${id}`);
    return data1;
  }
}
module.exports = SpeakerAPI;