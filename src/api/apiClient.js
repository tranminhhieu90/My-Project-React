import axios from 'axios'
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

export default axiosClient;

// import axios from 'axios';
// // import { authHeader } from '../helpers/auth-header';
// let headers = {
//   'Content-Type': 'application/json',
// };

// let axiosOption = {
//   withCredentials: true,
//   // headers: {...headers,...authHeader()}
// }
// if(process.env.NODE_ENV === 'production'){
//   // axiosOption = {...axiosOption, ...{baseURL: 'https://app.ausy-solution.com'}};
// } 
// axiosOption = {...axiosOption, ...{baseURL: 'http://192.168.0.95:3000/api/v1/'}};
// export default axios.create(axiosOption);
