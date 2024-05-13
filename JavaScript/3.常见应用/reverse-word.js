/**
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function (s) {
    return s.trim();
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s) {
    return s.trim().split(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords3 = function (s) {
    return s
        .trim()
        .split(' ')
        .filter((x) => x != '');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords4 = function (s) {
    return s
        .trim()
        .split(' ')
        .filter((x) => x != '')
        .reverse();
};

const str = 'a good   example';

console.log(reverseWords1(str));
console.log(reverseWords2(str));
console.log(reverseWords3(str));
console.log(reverseWords4(str));
