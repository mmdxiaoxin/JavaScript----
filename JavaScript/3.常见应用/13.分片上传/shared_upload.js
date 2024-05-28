import SparkMD5 from 'spark-md5';

const inp = document.querySelector('input');
inp.onchange = async (e) => {
    const file = inp.files[0];
    if (!file) {
        return;
    }
    const chunks = createChunks(file, 10 * 1024 * 1024);
    const result = await hash(chunks);
    console.log(result);
};

function hash(chunks) {
    return new Promise((resolve) => {
        const spark = new SparkMD5();
        function _read(i) {
            if (i >= chunks.length) {
                resolve(spark.end);
                return; //读取完成
            }
            const blob = chunks[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                const bytes = e.target.result; //读取到的字节数
                spark.append(bytes);
                _read(i + 1);
            };
            reader.readAsArrayBuffer(blob);
        }
        _read(0);
    });
}

/**
 *
 * @param {File} file
 * @param {number} chunkSize
 * @return {Array<Blob>}
 */
function createChunks(file, chunkSize) {
    const result = [];

    for (let i = 0; i < file.size; i += chunkSize) {
        result.push(file.slice(i, i + chunkSize));
    }
    return result;
}
