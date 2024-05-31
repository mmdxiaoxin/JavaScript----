/**
 * 并发请求
 * @param {string[]} urls
 * @param {number} maxNum
 */
function concurRequest(urls, maxNum) {
    return new Promise((resolve) => {
        if (urls.length === 0) {
            resolve([]);
        }

        let count = 0;
        const results = [];
        let index = 0;

        async function request() {
            if (index === urls.length) return;
            const i = index;
            const url = urls[index++];
            try {
                const resp = await fetch(url);
                results[i] = resp;
            } catch (error) {
                results[i] = error;
            } finally {
                count += 1;
                if (count === urls.length) {
                    resolve(results);
                }
                request();
            }
        }
        const times = Math.min(maxNum, urls.length);
        for (let i = 0; i < times; i++) {
            request();
        }
    });
}
