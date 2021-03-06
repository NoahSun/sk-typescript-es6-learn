function Radix2Radix(fromRadix = 10, toRadix, byteLen: number = 8, num): string {
    const remainderArr: number[] = [];
    let result: string;
    const calcRemainder = (toRadix, num): string => {
        let quotient: number,
            remainder: number;
        if (fromRadix === 10 && toRadix === 2) {
            quotient = Math.floor(num / 2);
            remainder = num % 2;
            console.log(remainderArr.toString());
            if (quotient >= 0 && quotient < 1) {
                remainderArr.push(remainder);
            } else {
                remainderArr.push(remainder);
                calcRemainder(toRadix, quotient);
            }
        }
        return remainderArr.reverse().join('');
    };
    const fillLength = (byteLen: number, str: string): string => {
        console.log(str.length, byteLen);
        const len = str.length - byteLen;
        if (len < 0) {
            str = new Array(Math.abs(len) + 1).join('0') + str;
        }
        return str;
    };
    result = calcRemainder(toRadix, num);
    result = fillLength(byteLen, result);
    return result;
}

console.log(Radix2Radix(10, 2, 8, 42));
