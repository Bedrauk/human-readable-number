const hundreds = (num) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] 
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let firstNum = Math.floor(num/100), midNum = Math.floor(num/10) % 10, lastNum = num % 10, res = '';
    
    if (firstNum) {
        res = `${ones[firstNum]} hundred `
    }
    if ((num % 100) >= 10 && (num % 100) < 20) {
        return res + teens[lastNum]
    } else {
        return res + (midNum ? `${tens[midNum-2]} ${ones[lastNum]}` : ones[lastNum])
    }
}

const toReadable = (num) => {
    const exponents = ['thousand', 'million', 'billion'];
    let sign = 1;

    let res = '', exponent = 0, tmp = num;

    if (num !== Math.abs(num)) {
        sign = 0;
        tmp = Math.abs(tmp)
    }
    while (tmp) {
        if (exponent) {
            res = `${hundreds(tmp % 1000)} ${exponents[exponent-1]} ${res}`;
        } else {
            res = `${hundreds(tmp % 1000)} ${res}`;
        }
        tmp = Math.floor(tmp/1000); 
        ++exponent;
    }
    if (!sign) {
        return ('minus ' + res).trim()
    } else if (res) {
        return res.trim()
    } else {
        return 'zero'
    }
}
// Экспорт функции для использования в других модулях
module.exports = toReadable;
