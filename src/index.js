module.exports = function toReadable(number) {
    let str = String(number);
    const zero_nineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenth = [
        ,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (str <= 19) {
        return zero_nineteen[str];
    } else if (str > 19 && str < 100) {
        if (str[1] == 0) {
            return tenth[str[0]];
        }
        return `${tenth[str[0]]} ${zero_nineteen[str[1]]}`;
    } else if (str >= 100 && number < 1000) {
        if (str[1] == 0 && str[2] == 0) {
            return `${zero_nineteen[str[0]]} hundred`;
        } else if (str[2] == 0) {
            return `${zero_nineteen[str[0]]} hundred ${tenth[str[1]]}`;
        } else if (str[1] == 0) {
            return `${zero_nineteen[str[0]]} hundred ${zero_nineteen[str[2]]}`;
        }
        return (`${str[1]}${str[2]}` <= 19)
            ? `${zero_nineteen[str[0]]} hundred ${
                  zero_nineteen[str[1] + str[2]]
              }`
            : `${zero_nineteen[str[0]]} hundred ${tenth[str[1]]} ${
                  zero_nineteen[str[2]]
              }`;
    }
};
