const findTheOldest = function(people) {
    return people.reduce(
        (prev, current) => {
            const d = new Date();
            let year = d.getFullYear();
            if (!prev.yearOfDeath) {
                prev.yearOfDeath = year;
            }
            if (!current.yearOfDeath) {
                current.yearOfDeath = year;
            }
            return (prev.yearOfDeath - prev.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth) ? prev : current
        }
    )
};

// Do not edit below this line
module.exports = findTheOldest;
