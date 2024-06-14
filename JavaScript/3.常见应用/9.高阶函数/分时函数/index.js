const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const taskHandler = (data, index) => {
        const div = document.createElement('div');
        div.textContent = index;
        document.body.appendChild(div);
    };
    browserPerformChunk(10000, taskHandler);
});

/**
 * 分时函数
 * @param {number | Array} data - 要处理的数据或任务数量
 * @param {(data: { length: number }, index: number) => void} taskHandler - 处理每个任务的函数
 * @param {(callback: (shouldContinue: () => boolean) => void) => void} scheduler - 调度器函数，控制任务执行的节奏
 */
function performanceChunk(data, taskHandler, scheduler) {
    if (typeof data === 'number') {
        data = { length: data };
    }
    if (data.length === 0) {
        return;
    }

    let currentIndex = 0;

    /**
     * 运行下一块任务
     */
    function runNextChunk() {
        if (currentIndex >= data.length) {
            return;
        }

        scheduler((shouldContinue) => {
            while (
                shouldContinue() &&
                currentIndex < data.length
            ) {
                taskHandler(data, currentIndex);
                currentIndex += 1;
            }
            runNextChunk();
        });
    }

    runNextChunk();
}

/**
 * 浏览器分时函数
 * @param {number | Array} data - 要处理的数据或任务数量
 * @param {(data: { length: number }, index: number) => void} taskHandler - 处理每个任务的函数
 */
function browserPerformChunk(data, taskHandler) {
    const scheduler = (executeTask) => {
        requestIdleCallback((idleDeadline) => {
            executeTask(() => idleDeadline.timeRemaining() > 0);
        });
    };

    performanceChunk(data, taskHandler, scheduler);
}
