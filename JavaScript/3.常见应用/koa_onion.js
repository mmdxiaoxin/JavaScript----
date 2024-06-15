class TaskPro {
    constructor() {
        this._isRunning = false;
        this._taskList = [];
        this._currentIndex = 0;
        this._next = async () => {
            this._currentIndex++;
            await this._runTask();
        };
    }
    /**
     * 添加一个任务
     * @param {Function} task
     */
    addTask(task) {
        this._taskList.push(task);
    }
    /**
     * 运行任务
     */
    run() {
        if (this._isRunning || !this._taskList.length) return;
        this._isRunning = true;
        this._runTask();
    }
    /**
     * 取出一个任务并执行
     */
    async _runTask() {
        if (this._currentIndex >= this._taskList.length) {
            this._reset();
            return;
        }
        const startIndex = this._currentIndex;
        const task = this._taskList[this._currentIndex];
        await task(this._next);
        const endIndex = this._currentIndex;
        if (startIndex === endIndex) {
            await this._next();
        }
    }
    /**
     * 重置任务状态
     */
    _reset() {
        this._isRunning = false;
        this._currentIndex = 0;
        this._taskList = [];
    }
}

const t = new TaskPro();
t.addTask(async (next) => {
    console.log(1, 'start');
    await next();
    console.log(1, 'end');
});

t.addTask(() => {
    console.log(2);
});

t.addTask(() => {
    console.log(3);
});

t.run(); // 1 start 2 3 1 end
