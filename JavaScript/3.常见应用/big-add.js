const a = '3782647863278468012934670';
const b = '23784678091370408971329048718239749083';

/**
 * 大数相加
 * @param {string} a
 * @param {string} b
 */
function bigSum(a, b) {
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    let sum = 0;
    let flag = 0;
    let res = '';

    for (let i = maxLength - 1; i >= 0; i--) {
        sum = parseInt(a[i]) + parseInt(b[i]) + flag;
        flag = Math.floor(sum / 10);
        res = (sum % 10) + res;
    }

    if (flag === 1) {
        res = '1' + res;
    }

    return res;
}

console.log(bigSum(a, b));
