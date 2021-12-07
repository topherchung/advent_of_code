
import { importFile } from '../../util/index.mjs'

const day = '01'
const dir = '.'
let filename = `${day}.sample`
//filename = `${day}.in`
let input = importFile(dir, filename).split('\n').map(x => parseInt(x, 10))

console.clear()

const part1 = () => {
    let sum = []
    for(let i = 2; i < input.length; i++) {
    }
    return sum
}

const part2 = () => {
    let sum = []
    for(let i = 2; i < input.length; i++) {
    }
    return sum
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