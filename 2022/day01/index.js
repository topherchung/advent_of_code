
import { importFile } from '../../util/index.mjs'
import * as fs from 'fs';

const day = '01'
const dir = '.'
let filename = `${day}.in`
//filename = `${day}.in`
let input = importFile(dir, filename).split('\n').map(x => parseInt(x, 10))
//let input = importFile(dir, filename).split('\n')
let elfCal = [];


console.clear()

const part1 = () => {

    let topElf = 0;

    let sum = 0;
    let elfCount=0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])){
            elfCal.push(sum);
            if (topElf < sum ) topElf = sum;
            sum=0;
            continue;
        }
        sum += input[i];
    }
    console.log("Elf with most calories: " + topElf)
}

const part2 = () => {
    elfCal = elfCal.sort()
    let top3Cal = elfCal[elfCal.length-1] + elfCal[elfCal.length-2] + elfCal[elfCal.length-3];
    console.log("Top 3 Elf calories: " + top3Cal)
}

console.log(`Advent of Code 2022 - Day ` + day)

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

console.log(`part1: ${(p1end - p1start).toFixed(3)}ms`)
console.log('part1', p1)
//console.log(`[![Part 1](https://img.shields.io/badge/Part%201-${(p1end - p1start).toFixed(3)}ms-informational)](https://adventofcode.com/2022/)`)


const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
//console.log(`[![Part 2](https://img.shields.io/badge/Part%201-${(p2end - p2start).toFixed(3)}ms-informational)](https://adventofcode.com/2022/)`)
console.log('part2', p2)

let content = "## Javascript\n"
content += (`[![Part 1](https://img.shields.io/badge/Part%201-${(p1end - p1start).toFixed(3)}ms-informational)](https://adventofcode.com/2022/)`) + "\n"
content += (`[![Part 2](https://img.shields.io/badge/Part%201-${(p2end - p2start).toFixed(3)}ms-informational)](https://adventofcode.com/2022/)`) + "\n"

fs.writeFile('readme.md', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
