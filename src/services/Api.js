import axios from 'axios';

export default class Api {
  constructor(axios) {
    this.api = axios;
  }

  async addProviderData(formData) {
    return await this.api.post('/item/create', formData);
  }

  async getItemByCode(code) {
    return await this.api.get(`/item/bycode/${code}`);
  }
}

const api = new Api(axios);

export { api };
