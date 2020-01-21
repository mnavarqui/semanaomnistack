import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://tc-nhr.anonymous.mobile.exp.direct:80',
});

export default axios;