import axios from 'axios'; 

const baseURL = 'http://172.17.0.3:3009';

// const baseURL = 'http://swstagingsaas.sa-east-1.elasticbeanstalk.com';

// const request = axios.create({
//   baseURL: `${baseURL}/pdv_api/v1`,
//   timeout: 10000,
//   headers: {'Content-Type': 'application/json',
//             'X-Admin-Email': email,
//             'X-Admin-Token': token}
// });

  const request = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'    }
  });

export default request;
