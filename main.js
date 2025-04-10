export function add(numbers) {
    if (numbers === "") {
        return 0
    }

    return numbers
        .split(",") // split en tableaux
        .map(Number) // converti en nombre
        .reduce((accum, numactuel) => accum + numactuel, 0) // somme les nombres
}