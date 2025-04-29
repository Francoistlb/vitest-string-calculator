export function add(numbers) {
    if (numbers === "") {
        return 0
    }

    if (numbers.includes('[]')) {
        throw new Error('[] ne sont pas permis')
    }

    let delimiter = ',';
    let numbersToProcess = numbers;

    
    if (numbers.startsWith('//')) {
        delimiter = numbers[2];
        numbersToProcess = numbers.substring(numbers.indexOf('\n') + 1);
    }

    return numbersToProcess
        .split(new RegExp(`[${delimiter}\n,]`))
        .map(Number)
        .reduce((accum, numactuel) => accum + numactuel, 0)
}