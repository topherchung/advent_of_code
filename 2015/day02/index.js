
import { importFile } from '../../util/index.mjs'

const day = '02'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let input = importFile(dir, filename).split('\n')

console.clear()

const part1 = () => {
    let sum = 0
    for(let i = 0; i < input.length; i++) {
        let sides = input[i].split("x")
        let l = sides[0]
        let w = sides[1]
        let h = sides[2]
        let spare = 999999999999999
        let sa = 0
        let sideArea = l*w
        if (sideArea < spare) spare = sideArea
        sa = sa + (sideArea*2)

        sideArea = l*h
        if (sideArea < spare) spare = sideArea
        sa = sa + (sideArea*2)

        sideArea = w*h
        if (sideArea < spare) spare = sideArea
        sa = sa + (sideArea*2)
        sum += (sa+spare)
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