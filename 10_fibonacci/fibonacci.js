const fibonacci = function(num) { 
    if(parseInt(num) < 0) {
        return "OOPS";
    }
    let fibLast = 0;
    let fibSecondLast = 0;
    let fibNext = 1;
    for(i=0; i<parseInt(num); i++) {
        fibLast = fibNext;
        fibNext = fibLast + fibSecondLast;
        fibSecondLast = fibLast;
    }
    return fibLast;
};

// Do not edit below this line
module.exports = fibonacci;
