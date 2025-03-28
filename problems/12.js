/**
 * Problem 12: Switch Statement
 * 
 * Given a fruit, return the price.
 * Here are the costs for each fruit:
 *  Orange - $1, Apple - $1.29, Grapes - $1.50, Banana - $0.75.
 *  All other food costs $2.
 * 
 * Use a switch statement.
 * 
 * @example "apple" -> "$1.29"
*/
function problem(fruit) {
    lower_case_fruit = fruit.trim().toLowerCase();

    if (lower_case_fruit === "orange") {
        return "$1";
    }
    else if (lower_case_fruit === "apple") {
        return "$1.29";
    }
    else if (lower_case_fruit === "grapes") {
        return "$1.50";
    }
    else if (lower_case_fruit === "banana") {
        return "$0.75";
    }

    return "$2";
}

const tests = [
    ["orange", "$1"],
    ["apple", "$1.29"],
    ["grapes", "$1.50"],
    ["banana", "$0.75"],
    ["grapefruit", "$2"],
    ["melon", "$2"]
]

module.exports = {problem, tests};