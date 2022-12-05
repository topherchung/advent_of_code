
import { importFile } from '../../util/index.mjs'
import * as fs from 'fs';

console.clear()

const day = '02'
const dir = '.'
//let filename = `${day}.sample`
let filename = `${day}.in`
let input = importFile(dir, filename).split('\n').map(x => x.split(' '))

const elf_roshambo_beats = {
    "A" : 'C',
    "B" : 'A',
    "C" : 'B'
};

const handTranslate = {
    "X" : "A",
    "Y" : "B",
    "Z" : "C",
}

const elf_roshambo_beaten_by = {
    "A" : "B",
    "B" : "C",
    "C" : "A",
};

const scoring = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1,
    "Y": 2,
    "Z": 3,
    win: 6,
    loss : 0,
    draw : 3
};

const part1 = () => {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        let temp = input[i]
        let p1 = temp[0]
        let p2 = handTranslate[temp[1]]
        if (p1 == p2 ){
            sum += scoring.draw + scoring[input[i][1]];
        } else if (elf_roshambo_beaten_by[p1] == p2) {
            sum += scoring.win + scoring[input[i][1]];
        } else {
            sum += scoring.loss + scoring[input[i][1]];
        }
    }
    return sum;
}

const part2 = () => {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        let temp = input[i]
        let p1 = temp[0]
        let p2 = temp[1]
        if (p2 == "Y") { //draw
            sum += scoring.draw + scoring[p1];
        } else if (p2 == "X") { //loss
            let hand = elf_roshambo_beats[p1]
            sum += scoring.loss + scoring[hand];
        } else { //win
            let hand = elf_roshambo_beaten_by[p1]
            sum += scoring.win + scoring[hand];
        }
    }
    return sum;
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