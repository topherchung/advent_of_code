
import { importFile } from '../../util/index.mjs'

const day = '01'
const dir = '.'
let filename = `${day}.in`
//filename = `${day}.in`
let input = importFile(dir, filename).split('\n').map(x => parseInt(x, 10))
//let input = importFile(dir, filename).split('\n')


console.clear()

const part1 = () => {
    let elfCal = [];
    let sum = 0;
    let elfCount=0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])){
            elfCal.push(sum);
            sum=0;
            continue;
        }
        sum += input[i];
    }

    let topElf = -9999999999;
    for (let j=0; j<elfCal.length;j++){
        if (topElf < elfCal[j]){
            topElf = elfCal[j];
        }
    }

    console.log("Elf with most calories: " + topElf)
    return sum
}

const part2 = () => {
    let elfCal = [];
    let sum = 0;
    let elfCount=0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])){
            elfCal.push(sum);
            sum=0;
            continue;
        }
        sum += input[i];
    }

    elfCal = elfCal.sort()

    let top3Cal = elfCal[elfCal.length-1] + elfCal[elfCal.length-2] + elfCal[elfCal.length-3];

    console.log("Top 3 Elf calories: " + top3Cal)
    return sum
}

console.log(`Advent of Code 2022 - Day ` + day)

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

console.log(`part1: ${(p1end - p1start).toFixed(3)}ms`)
console.log('part1', p1)

const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
console.log('part2', p2)
