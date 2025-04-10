export function add(numbers) {
    if (numbers === "") {
        return 0
    }

    return numbers
        .split(/[,\n]/)
        .map(Number)
        .reduce((accum, numactuel) => accum + numactuel, 0)
}