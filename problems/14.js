/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let freqDict = {};
    
    numbers.forEach((number) => {
        real_number = parseInt(number)
        if (real_number in freqDict) {
            freqDict[real_number] += 1;
        }
        else {
            freqDict[real_number] = 1;
        }
    });

    const majorityElement = Object.keys(freqDict).reduce((a, b) => {
        return freqDict[b] > freqDict[a] ? b : a;
    }, Object.keys(freqDict)[0]);

    return parseInt(majorityElement);
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};