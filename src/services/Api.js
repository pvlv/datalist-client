import axios from 'axios';

export default class Api {
  constructor(axios) {
    this.api = axios;
  }

  async addProviderData(formData) {
    return await this.api.post('/item/create', formData);
  }
}

const api = new Api(axios);

export { api };
