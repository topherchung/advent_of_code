
import { importFile } from '../../util/index.mjs'

const day = '01'
const dir = '.'
let filename = `${day}.sample`
//filename = `${day}.in`
let input = importFile(dir, filename).split('\n')


class caveNode {
    constructor(name) {
    }
    addPath(nextRoom){
    }
}

class caveSystem{
    constructor() {
        this.caveSystem = []
        this.start = NaN
        this.end = NaN
    }
    addPath(){
    }
}


console.clear()

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

console.log(`Advent of Code 2021 - Day ` + day)

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
