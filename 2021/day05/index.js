
import { importFile } from '../../util/index.mjs'

const day = '05'
const dir = '.'
let filename = `${day}.sample`
filename = `${day}.in`
let coords = []
let input = importFile(dir, filename).split('\n').map(x => {
    let lineParts = x.split(' ')
    let x1y1 = lineParts[0].split(',').map(y => parseInt(y,10))
    let x2y2 = lineParts[2].split(',').map(y => parseInt(y,10))
    coords.push([].concat(x1y1,x2y2))
})

console.clear()

let ocean_floor_map = new Map()

const updateMapWithVerticalCoords = (cords) => {
    let [x1,start,x2,end] = cords

    if (x1 != x2)
        return false

    if (start > end)
        [start,end] = [end, start] //swap variable values

    for (let i=start;i<=end;i++){
        let pos = `${x1},${i}`
        if (ocean_floor_map.has(pos)){
            let val = ocean_floor_map.get(pos)
            val++
            ocean_floor_map.set(pos,val)
        }
        else {
            ocean_floor_map.set(pos,1)
        }
    }
    return true
}

const updateMapWithHorizontalCoords = (cords) => {
    let [start,y1,end,y2] = cords

    if (y1 != y2)
        return false

    if (start > end)
        [start,end] = [end, start] //swap variable values

    for (let i=start;i<=end;i++){
        let pos = `${i},${y1}`
        if (ocean_floor_map.has(pos)){
            let val = ocean_floor_map.get(pos)
            val++
            ocean_floor_map.set(pos,val)
        }
        else {
            ocean_floor_map.set(pos,1)
        }
    }
    return true
}

const updateMapWithDiagonalCoords = (cords) => {
    let [x1,y1,x2,y2] = cords
}

const part1 = () => {

    for(let i = 0; i < coords.length; i++) {
        let [x1,y1,x2,y2] = coords[i]
        if (x1 == x2)
            updateMapWithVerticalCoords(coords[i])
        if (y1 == y2)
            updateMapWithHorizontalCoords(coords[i])
    }
    let count = 0
    ocean_floor_map.forEach((v) => {if (v > 1) count++})
    return count
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
