const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(end) || !Number.isInteger(start))
    {
        return("ERROR");
    }
    if (end < 0 || start < 0) {
        return("ERROR");
    }
    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }
    for (i = start; i <= end; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
