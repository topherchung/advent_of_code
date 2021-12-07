
import { importFile } from '../../util/index.mjs'

const day = '06'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let input = importFile(dir, filename).split(',').map(x => parseInt(x, 10))

console.clear()

class lanternFishPop{
    constructor() {
        this.pop = [0,0,0,0,0,0,0,0,0]
    }
    addFish(spawnCtr){
        this.pop[spawnCtr]++
    }
    nextDay(){
        let newFish = this.pop[0]
        for (let i=1; i<=8;i++){
            this.pop[i-1] = this.pop[i]
        }
        this.pop[8] = newFish
        this.pop[6] += newFish
    }
    fishPopSize(){
        let accumulator=0
        for(let i=0;i<=8;i++){
            accumulator+=this.pop[i]
        }
        return accumulator
    }
}


const part1 = () => {
    let dayCheck = 80
    for (let i=0; i<dayCheck;i++){
        //console.log("Day " + i + " - Fish Pop Size: " + fishPop.fishPopSize())
        fishPop.nextDay()
    }
    return fishPop.fishPopSize()
}

const part2 = () => {
    let dayCheck = 256
    for (let i=0; i<dayCheck;i++){
        //console.log("Day " + i + " - Fish Pop Size: " + fishPop.fishPopSize())
        fishPop.nextDay()
    }
    return fishPop.fishPopSize()
}


let fishPop = new lanternFishPop()
for (let i=0; i<input.length;i++){
    fishPop.addFish(input[i])
}

console.log(`Advent of Code 2021 - Day ` + day)
const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

console.log(`part1: ${(p1end - p1start).toFixed(3)}ms`)
console.log('part1', p1)

fishPop = new lanternFishPop()
for (let i=0; i<input.length;i++){
    fishPop.addFish(input[i])
}

const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
console.log('part2', p2)
