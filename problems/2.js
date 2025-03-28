/**
 * Problem 2: Mapping
 * 
 * Given a list of names, create a list of strings that says "Hi {Name}".
 * Use the .map function.
 * 
 * @example ["Chase", "Raman"] -> ["Hi Chase", "Hi Raman"]
 */
function problem(names) {
    const greetedNames = names.map(name => `Hi ${name}`);
    return greetedNames;
}

const tests = [
    [["Chase", "Raman"], ["Hi Chase", "Hi Raman"]],
    [["Mars"], ["Hi Mars"]],
    [[], []]
]

module.exports = {problem, tests};