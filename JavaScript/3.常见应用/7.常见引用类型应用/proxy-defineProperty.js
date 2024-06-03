const obj = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: 2,
    },
};

function __isObject(v) {
    return typeof v === 'object' && v != null;
}

/**
 * 观察操作
 * @param {object} obj
 */
function observe(obj) {
    for (const k in obj) {
        let v = obj[k];
        if (__isObject(v)) {
            observe(v);
        }
        Object.defineProperty(obj, k, {
            get() {
                console.log(k, '读取');
                return v;
            },
            set(val) {
                if (val !== v) {
                    console.log(k, '更改');
                    v = val;
                }
            },
        });
    }
}

// 观察（监听属性）
observe(obj);

obj.a = 3;

// obj.adsfadf = 4; // 无法增加
// delete obj.c; //无法删除

// 观察（监听对象）
const proxy = new Proxy(obj, {
    get(target, k) {
        let v = target[k];
        console.log(k, '读取');
        return v;
    },
    set(target, k, val) {
        if (target[k] !== val) {
            target[v] = val;
            console.log(k, '更改');
        }
    },
});

proxy.a = 3;
proxy.b;
