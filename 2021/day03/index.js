
import { importFile } from '../../util/index.mjs'

const day = '03'
const dir = '.'
//const filename = `${day}.sample`
const filename = `${day}.in`
//let input = importFile(dir, filename).split('\n').map(x => parseInt(x, 10))
let input = importFile(dir, filename).split('\n')

console.clear()

const part1 = () => {

    let gamma = ""
    let epsilon = ""
    for (let j = 0; j < input[0].length; j++) {
        let c0 = 0
        let c1 = 0
        for (let i = 0; i < input.length; i++) {
            if (input[i][j] == "1")
                c1++
            else
                c0++

        }
        if (c1 > c0) {
            gamma = gamma + "1"
            epsilon = epsilon + "0"
        }
        else {
            gamma = gamma + "0"
            epsilon = epsilon + "1"
        }
    }
    return  parseInt(gamma,2) * parseInt(epsilon, 2)
}

//1503 * 2592

const oxygen = () => {
    let numlist = input
    for(let i = 0; i < input[0].length; i++) {
        let c0=0;
        let c1=0;
        for(let j = 0; j < numlist.length; j++) {
            if (numlist[j][i] == "1") c1++;else c0++;
        }
        let templist = []
        let marker = "1";
        if (c0>c1) marker = "0"
        for (let k=0;k < numlist.length;k++){
            if (numlist[k][i]==marker) templist.push(numlist[k])
        }
        numlist = templist
        if (numlist.length == 1)
            break
    }
    return parseInt(numlist[0],2)
}

const co2scrubber = () => {
    let numlist = input
    for(let i = 0; i < input[0].length; i++) {
        let c0=0;
        let c1=0;
        for(let j = 0; j < numlist.length; j++) {
            if (numlist[j][i] == "1") c1++;else c0++;
        }
        let templist = []
        let marker = "0";
        if (c1<c0) marker = "1"
        for (let k=0;k < numlist.length;k++){
            if (numlist[k][i]==marker) templist.push(numlist[k])
        }
        numlist = templist
        if (numlist.length == 1)
            break
    }
    return parseInt(numlist[0],2)
}

//1991*3982

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

const p2start = performance.now()
const o2 = oxygen()
const co2 = co2scrubber()
const lifesupport = o2*co2
const p2end = performance.now()

console.log(`Advent of Code 2021 - Day ` + day)
console.log(`part1: ${(p1end - p1start).toFixed(3)}ms`)
console.log('part1', p1)
console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
console.log('part2', lifesupport)
