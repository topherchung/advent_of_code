
import { importFile } from '../../util/index.mjs'

const day = '04'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let input = importFile(dir, filename).split('\n')


let drawlist=input[0].split(",").map(x => parseInt(x, 10))

let bingoCards = []

const parseCardLine = (line) => {
    let cardLine = []
    line = line.split(" ")
    line.forEach(e => {
        if (e.trim().length > 0) {
            let num = parseInt(e,10)
            cardLine.push(num)
        }
    })

    return cardLine
}

class bingoCard {
    constructor(cardarray) {
        this.cardArray = cardarray
        this.sizeh=5
        this.sizev=5
        this.won=false
    }
    bingoCheck(drawlist){
        for (let i=0; i<this.sizev;i++){
            let line = this.cardArray[i]
            let bingoCount=0
            for (let j=0;j<=drawlist.length;j++) {
                let num = drawlist[j]
                for (let k = 0; k < this.sizeh; k++) {
                    if (line[k] == num) bingoCount++
                }
                if (bingoCount >= 5){
                    let sumThese = []
                    for (let m = 0; m < this.cardArray.length; m++) {
                        let temparr = this.cardArray[m].filter(x => !drawlist.includes(x))
                        sumThese = [].concat(sumThese,temparr)
                    }
                    let sum = sumThese.reduce((a,b) => a+b, 0)
                    this.won = true
                    return [true, sum]
                }
            }
        }

        for (let i=0; i<this.sizev;i++){
            let line= []
            for(let l=0;l<this.sizev;l++){
                line.push(this.cardArray[l][i])
            }
            let bingoCount=0
            for (let j=0;j<=drawlist.length;j++) {
                let num = drawlist[j]
                for (let k = 0; k < this.sizeh; k++) {
                    if (line[k] == num) bingoCount++
                }
                if (bingoCount >=5) {
                    let sumThese = []
                    for (let m = 0; m < this.cardArray.length; m++) {
                        let temparr = this.cardArray[m].filter(x => !drawlist.includes(x))
                        sumThese = [].concat(sumThese,temparr)
                    }
                    let sum = sumThese.reduce((a,b) => a+b, 0)
                    this.won = true
                    return [true, sum]
                }
            }
        }
        return [false, []]
    }
}


for (let i=2; i<(input.length);i+=6){
    let card = []
    card.push(parseCardLine(input[i  ]))
    card.push(parseCardLine(input[i+1]))
    card.push(parseCardLine(input[i+2]))
    card.push(parseCardLine(input[i+3]))
    card.push(parseCardLine(input[i+4]))

    bingoCards.push(new bingoCard(card))
}

console.clear()


const part1 = () => {
    for(let i = 1; i < drawlist.length+1; i++) {
        let drawNum = drawlist[i-1]
        for (let j=0; j < bingoCards.length;j++){
            let card = bingoCards[j]
            let currDrawList = drawlist.slice(0,i)
            let [found,sum] = card.bingoCheck(currDrawList)
            if(found){
                return drawNum*sum
            }
        }
    }
    return "Part 1 error"
}

const part2 = () => {
    let finalval = -1
    for(let i = 1; i < drawlist.length+1; i++) {
            let drawNum = drawlist[i-1]
            for (let j=0; j < bingoCards.length;j++){
                let card = bingoCards[j]
                if (card.won)
                    continue
                let currDrawList = drawlist.slice(0,i)
                let [found,sum] = card.bingoCheck(currDrawList)
                if(found){
                    finalval = drawNum*sum
                }
            }
        }
    return finalval
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