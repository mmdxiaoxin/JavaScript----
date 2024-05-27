//解析URL

/**
 * 1.使用URL对象
 */
// 创建一个URL对象
const url =
    'https://example.com:8080/path/name?query=string#hash';

const urlObj = new URL(url);

// 提取URL的各个部分
console.log('URL对象');
console.log('href:', urlObj.href); // https://example.com:8080/path/name?query=string#hash
console.log('protocol:', urlObj.protocol); // https:
console.log('hostname:', urlObj.hostname); // example.com
console.log('port:', urlObj.port); // 8080
console.log('pathname:', urlObj.pathname); // /path/name
console.log('search:', urlObj.search); // ?query=string
console.log('hash:', urlObj.hash); // #hash
console.log('host:', urlObj.host); // example.com:8080
console.log('origin:', urlObj.origin); // https://example.com:8080
console.log('searchParams:', urlObj.searchParams.get('query')); // string

/**
 * 2.使用正则表达式
 */
const urlPattern =
    /^(https?:\/\/)?([^\/:]+)(:([^\/]+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;

const matches = url.match(urlPattern);
const urlParts = {
    href: url,
    protocol: matches[1] || '',
    hostname: matches[2] || '',
    port: matches[4] || '',
    pathname: matches[5] || '',
    search: matches[6] || '',
    hash: matches[7] || '',
};

console.log('正则表达式：');
console.log('href:', urlParts.href);
console.log('protocol:', urlParts.protocol);
console.log('hostname:', urlParts.hostname);
console.log('port:', urlParts.port);
console.log('pathname:', urlParts.pathname);
console.log('search:', urlParts.search);
console.log('hash:', urlParts.hash);

/**
 * 3.使用现代浏览器提供的URLSearchParams接口
 */
// 提取查询参数
const params = new URLSearchParams(url.search);

console.log('提取查询参数');
for (let [key, value] of params) {
    console.log(`${key}: ${value}`);
}

// 或者单独获取某个参数
console.log('单独获取某个参数');
console.log('query:', params.get('query')); // string
console.log('other:', params.get('other')); // param
