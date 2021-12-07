
import { importFile } from '../../util/index.mjs'

const day = '07'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let input = importFile(dir, filename).split(',').map(x => parseInt(x, 10))

let min=99999999
let max=0
input.map(x => {
    if (x < min) min=x
    if (x > max) max=x
})

console.clear()

const checkFuelUsePart1 =  (searchArr, pos) => {
    let fuelSum = 0
    input.map(x => {
        fuelSum += Math.abs(x-pos)
    })
    return fuelSum
}
const checkFuelUsePart2 =  (searchArr, pos) => {
    let fuelSum = 0
    input.map(x => {
        let distance = Math.abs(x-pos)
        for (let i=1;i<=distance;i++)
            fuelSum += i
    })
    return fuelSum
}

const serachForOptimalPosition = (checkFuelMethod) => {
    //binary search the position range until you find the lowest possible position

    let curMid = (max - min)/2
    let curMin = min
    let curMax = max
    let notFound = true
    while  (true){
        let midCheck = checkFuelMethod(input, curMid)
        let leftCheck = checkFuelMethod(input, curMid - Math.round((curMid-curMin)/2))
        let rightCheck = checkFuelMethod(input, curMid + Math.round((curMax-curMid)/2))

        if (leftCheck < rightCheck){
            curMax = curMid
            curMid = curMid - Math.round((curMid-curMin)/2)
            continue
        }
        if (leftCheck > rightCheck){
            curMin = curMid
            curMid = curMid + Math.round((curMax-curMid)/2)
            continue
        }

        if ((midCheck == leftCheck || midCheck == rightCheck) || ( midCheck < leftCheck && midCheck < rightCheck)) {
            return midCheck
        }
    }
    return midCheck
}

const part1 = () => {
   return serachForOptimalPosition(checkFuelUsePart1)
}
const part2 = () => {
    return serachForOptimalPosition(checkFuelUsePart2)
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
