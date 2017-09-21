export const run = async () => {
    // 写法一
    const test = import('./test');
    test.then(value => {
        const t = new value.Test();
        console.log(1);
    }, reason => {
        console.log(reason);
    });

    // 写法二
    const test1 = await import('./test');
    const t = new test1.Test();
    console.log(2);
};

run();
