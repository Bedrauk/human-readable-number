module.exports = function toReadable (number) {
    const exponents = ['thousand', 'million', 'billion'];
    const nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine', 'ten', 'eleven', 'twelve', 'thirteen'];
    const postfix = ['teen', 'ty', 'twenty', 'thirty'];
    let firstNum = Math.floor(number/100), midNum = Math.floor(number/10) % 10, lastNum = number % 10;
    let res = '', exponent = 0, tmp = number;

    if (firstNum) {
        res = `${nums[firstNum]} hundred `
    }
    if (number > (nums.length-1) && number < 20) {
        if (nums[lastNum].endsWith('o') || nums[lastNum].endsWith('t') || nums[lastNum].endsWith('ve')) {
            return res + nums[lastNum].slice(0,-1) + postfix[0];
        } else {
            return res + nums[lastNum] + postfix[0];
        }
    } else {
        return res + nums[number]
    }

    while (tmp) {
        if (exponent) {
            
        } else {
           
        }
        tmp = Math.floor(tmp/1000); 
        ++exponent;
    }
}
