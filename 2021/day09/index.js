
import { importFile } from '../../util/index.mjs'

const day = '09'
const dir = '.'
let filename = `${day}.sample`
//filename = `${day}.in`
let input = importFile(dir, filename).split('\n')
let caveMap  = []

for (let i=0;i<input.length;i++){
    let caveLine = input[i].split('').map(x =>  parseInt(x))
    caveMap.push(caveLine)
}

console.clear()

const part1 = () => {
    let sum = 0
    for (let i=0;i<caveMap.length;i++){
        for (let j=0;j<caveMap[i].length;j++){
            if (j == 0 && caveMap[i][j] > caveMap[i][j+1]) continue
            if (j > 0 && caveMap[i][j] > caveMap[i][j-1]) continue
            if (j < (caveMap[i].length-1) && caveMap[i][j] > caveMap[i][j+1]) continue
            if (j == (caveMap[i].length-1) && caveMap[i][j] > caveMap[i][j-1]) continue

            if (i==0 && caveMap[i][j] > caveMap[i+1][j]) continue
            if (i>0 && caveMap[i][j] > caveMap[i-1][j]) continue
            if (i < caveMap.length-1 && caveMap[i][j] > caveMap[i+1][j]) continue
            if (i == caveMap.length-1 && caveMap[i][j] > caveMap[i-1][j]) continue

            sum += (caveMap[i][j] + 1)
        }
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
