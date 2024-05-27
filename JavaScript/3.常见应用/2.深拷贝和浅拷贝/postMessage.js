// 创建隐藏的 iframe
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);

// 等待 iframe 加载完成
iframe.onload = () => {
    // 定义深拷贝函数
    function deepCopy(obj) {
        return new Promise((resolve) => {
            // 设置一个消息监听器
            window.addEventListener(
                'message',
                function onMessage(event) {
                    // 确保消息来源是我们的 iframe
                    if (event.source === iframe.contentWindow) {
                        // 移除监听器
                        window.removeEventListener(
                            'message',
                            onMessage,
                        );
                        // 解析并返回深拷贝的数据
                        resolve(event.data);
                    }
                },
            );

            // 向 iframe 发送消息
            iframe.contentWindow.postMessage(obj, '*');
        });
    }

    // 使用深拷贝函数
    const originalObject = { a: 1, b: { c: 2 } };
    deepCopy(originalObject).then((copiedObject) => {
        console.log(copiedObject); // 输出深拷贝的对象
    });
};

// 设置 iframe 的内容（空白页面）
iframe.src = 'about:blank';
