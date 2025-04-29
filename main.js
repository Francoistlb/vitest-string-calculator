export function add(numbers) {
    if (numbers === "") return 0
    if (numbers.includes('[]')) throw new Error('[] ne sont pas permis')

    const isCustom = numbers.startsWith('//')
    const delimiter = isCustom ? numbers[2] : ','
    const nums = isCustom ? numbers.substring(numbers.indexOf('\n') + 1) : numbers

    return nums.split(new RegExp(`[${delimiter}\n,]`))
              .reduce((sum, num) => sum + Number(num), 0)
}