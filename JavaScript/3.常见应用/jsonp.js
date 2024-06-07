function jsonp({ url, params, cb }) {
    return Promise((resolve) => {
        let script = document.createElement('script');
        window[cb] = function (data) {
            resolve(data);
            document.body.removeChild(script);
        };
        params = { ...params, cb }; // wb=b&cb=show
        let arr = [];
        for (const key in params) {
            arr.push(`${key}=${params[key]}`);
        }
        script.src = `${url}?${arr.join('&')}`;
        document.body.appendChild(script);
    });
}
// 只能发送get请求 不支持post put delete
// 不安全 xss攻击  不采用
jsonp({
    url: 'http://localhost:3000/say',
    params: { wd: '我爱你' },
    cb: 'show',
}).then((data) => {
    console.log(data);
});
