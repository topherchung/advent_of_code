
import { importFile } from '../../util/index.mjs'
import * as fs from 'fs';

console.clear()

const day = '01'
const dir = '.'
let filename = `${day}.sample`
//let filename = `${day}.in`
let input = importFile(dir, filename).split('\n').map(x => parseInt(x, 10))

const part1 = () => {
    let sum = []
    for(let i = 0; i < input.length; i++) {
    }
    return sum
}

const part2 = () => {
    let sum = []
    for(let i = 0; i < input.length; i++) {
    }
    return sum
}

console.log(`Advent of Code 2022 - Day ` + day)

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

console.log('part1', p1)

const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
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