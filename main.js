export function add(numbers, delimiter) {

    if (numbers === "") {
        return 0
    }

    if (numbers.includes('[') 
        && numbers.includes(']') 
        && delimiter.includes('[') 
        && delimiter.includes(']')) {

        throw new Error('[] ne sont pas permis')
    }

    return numbers
        .split(/[,\n]/)
        .map(Number)
        .reduce((accum, numactuel) => accum + numactuel, 0)
}