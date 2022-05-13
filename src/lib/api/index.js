import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

// instance.defaults.headers.common[
//   'Authorization'
// ] = `serviceKey ${process.env.REACT_APP_API_KEY}`;

export const test = () =>
  instance.get('/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail', {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
    },
  });

export default instance;
