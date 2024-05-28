import axios from 'axios';

const config = {
    // 默认地址请求地址，可在 .env.** 文件中修改
    baseURL: '/api',
    // 设置超时时间
    timeout: 10000,
    // 跨域时候允许携带凭证
    withCredentials: true,
};

const service = axios.create(config);

service.interceptors.request.use((config) => {});

service.interceptors.response.use((config) => {});

export default service;
