
import { importFile } from '../../util/index.mjs'

const day = '08'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let input = importFile(dir, filename).split('\n')

let segmentPatterns = []
for (let i=0;i<input.length;i++){
    let lineParts = input[i].split("|").map(x => x.trim())
    let segPat = lineParts[0].split(" ").map(x => x.split('').sort().join())
    let digitPat = lineParts[1].split(" ").map(x => x.split('').sort().join())
    segmentPatterns.push([segPat,digitPat])
}

console.clear()

const part1 = () => {
    let count = 0
    for (let i=0; i<input.length;i++){
        let digits = input[i].split("|")[1].trim().split(" ")
        for (let j=0;j<digits.length;j++){
            let dlen = digits[j].length
            if (dlen == 2 || dlen == 4 || dlen == 3 || dlen == 7)
                count++
        }
    }
    return count
}

class segmentMapDecoder {
    constructor(segmentCipherText) {
        this.segPat = segmentCipherText[0]
        this.digitPat =  segmentCipherText[1]

        //build a segment map based on
        //   1111
        //  2    3
        //  2    3
        //   4444
        //  5    6
        //  5    6
        //   7777
        this.segCodeMap = { 1 : "", 2 : "", 3 : "", 4 : "", 5 : "", 6 : "", 7 : "", }
        this.decodeSegmentMap()
    }
    decodeSegmentMap(){
        for(let i=0;i<this.segPat.length;i++){
            let sp = this.segPat[i].split(',')
            if(sp.length == 5 || sp.length == 6)
                continue
            if(sp.length == 2){
                //found 1 = map the segments
                this.segCodeMap[3] = sp[0]
                this.segCodeMap[6] = sp[1]
                continue
            }
            if(sp.length == 3){
                // found 7 = map the segments
                this.segCodeMap[1] = sp[0]
                continue
            }
            if(sp.length == 4){
                // found 4 = map the segments
                this.segCodeMap[2] = sp[0]
                this.segCodeMap[4] = sp[2]
                continue
            }
            if(sp.length == 7){
                this.segCodeMap[5] = sp[4]
                this.segCodeMap[7] = sp[6]
            }
        }
    }

}

const part2 = () => {
    for(let i = 0; i < segmentPatterns.length; i++) {
        let codePat = new segmentMapDecoder(segmentPatterns[i])
        let sdfsd = 0
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
