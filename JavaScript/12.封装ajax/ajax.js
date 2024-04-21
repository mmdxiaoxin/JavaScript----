function ajax(options) {
    const xhr = new XMLHttpRequest();

    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';

    const params = options.data;

    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true);
        xhr.send(null);
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true);
        xhr.send(params);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    };
}

ajax({
    type: 'get',
    dataType: 'json',
    data: {},
    url: 'https://mock.presstime.cn/mock/6534b86affb279f23e01859d/api-control-hub',
    success: function (text, xml) {
        console.log(text, xml);
    },
    fail: function (status) {
        console.log(status);
    },
});
