
import { importFile } from '../../util/index.mjs'

const day = '01'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let input = importFile(dir, filename).split('\n')

console.clear()

const part1 = () => {
    let floor = 0
    for(let i = 0; i < input[0].length;i++){
        if (input[0][i]=="(") floor++;else floor--;
    }
    return floor
}

const part2 = () => {
    let floor = 0
    let pos=1;
    for(let i = 0; i < input[0].length;i++){
        if (input[0][i]=="(") floor++;else floor--;
        if(floor == -1) break;
        pos++;
    }
    return pos;
}

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`Advent of Code 2021 - Day ` + day)
console.log(`part1: ${(p1end - p1start).toFixed(3)}ms`)
console.log('part1', p1)
console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
console.log('part2', p2)