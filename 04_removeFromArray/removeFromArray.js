const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++)
    {
        let toRemove = arguments[i];
        let index = array.indexOf(toRemove);
        if (index >= 0) {
            array.splice(index, 1);
        }   
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
