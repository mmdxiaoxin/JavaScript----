const url = 'https://example.com/chat'; // 假设这是一个AI语言模型的接口

/**
 * 模仿chatGPT获取响应
 * @param {string} text
 */
async function getResponse(text) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: text }),
    });
    // response此时只收到了一个响应头，我们需要等待响应体的到来
    // chat响应体可能会有延迟，我们可以多次获取文本直到完全收到响应体
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();
    while (1) {
        const { value, done } = await reader.read();
        if (done) break;
        const text = textDecoder.decode(value);
        console.log(text);
    }
}
