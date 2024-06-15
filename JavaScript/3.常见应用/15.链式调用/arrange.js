function arrange(name) {
    const task = [];
    task.push(() => {
        console.log(`${name} is notified`);
    });

    function doSomething(action) {
        task.push(() => {
            console.log(`Start to ${action}`);
        });
        return this;
    }

    function wait(time) {
        task.push(
            () =>
                new Promise((resolve) => {
                    console.log(`等待${time}秒`);
                    setTimeout(() => {
                        resolve();
                    }, time * 1000);
                }),
        );
        return this;
    }

    function waitFirst(time) {
        task.unshift(
            () =>
                new Promise((resolve) => {
                    console.log(`等待${time}秒`);
                    setTimeout(() => {
                        resolve();
                    }, time * 1000);
                }),
        );
        return this;
    }

    async function execute() {
        for (const t of task) {
            await t();
        }
    }

    return {
        do: doSomething,
        wait,
        waitFirst,
        execute,
    };
}

/**
 * 实现以下功能
 */

// arrange('William').execute();
// > William is notified

// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit

arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待5秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute();
// 等待5秒
// > William is notified
// > Start to push
