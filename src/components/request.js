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

const userData = JSON.parse(sessionStorage.getItem('user_info'));

  const request = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'X-Admin-Email': userData !== null ? userData.email : '',
        'X-Admin-Token': userData !== null ? userData.token : ''}
  });

export default request;
