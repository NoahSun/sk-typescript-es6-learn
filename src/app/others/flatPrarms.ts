interface InterfaceValueOrFunction {
    (key: string, valueOrFunction: any): void;
}
let prefix: any,
    s: any[] = [],
    add: InterfaceValueOrFunction = function (key, valueOrFunction) {
        let value = (
            typeof valueOrFunction === 'function'
                ? valueOrFunction() : valueOrFunction
        );
        s[s.length] = `${key}=${value == null ? "" : value}`;
    };

function flatParams(
    prefix: any,
    value: { [index: string]: any },
    add: InterfaceValueOrFunction
) {
    const args = arguments;
    if (value.constructor.name === 'Object') {
        for (let key in value) {
            args.callee(prefix ? `${prefix}.${key}` : `${key}`, value[key], add);
        }
    } else if (value.constructor.name === 'Array') {
        value.forEach((v: any, i: number) => {
            args.callee(
                `${prefix}[${i}]`,
                v,
                add
            )
        });
    } else {
        add(prefix, value)
    }
}

flatParams(prefix, { a: 1, b: { aa: 1, bb: [1] }, c: [1, { aa: 1, bb: 2 }] }, add);

console.log(s.join('&'));
