function solution () {
    let result = '';
    return {
        append(str) {
            result += str;
        },
        removeStart(num) {
            result = result.slice(num);
        },
        removeEnd(num) {
            result = result.slice(0, -num);
        },
        print () {
            console.log(result);
        }
    }
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();