
import { importFile } from '../../util/index.mjs'


const day = '02'
const dir = '.'
const filename = `${day}.in`
let input = importFile(dir, filename).split('\n')

console.clear()

const part1 = () => {
    let position = 0
    let depth = 0
    for(let i = 0; i < input.length; i++) {
        let instruction = input[i]
        let inst_parts = instruction.split(' ')
        if (inst_parts[0] == "forward"){
            position += parseInt(inst_parts[1])
        }
        if (inst_parts[0] == "down"){
            depth += parseInt(inst_parts[1])
        }
        if (inst_parts[0] == "up"){
            depth -= parseInt(inst_parts[1])
        }
    }
    console.log("Part 1: Pos x Depth = ", (depth*position))
}

const part2 = () => {
    let position = 0
    let aim = 0
    let depth = 0
    for(let i = 0; i < input.length; i++) {
        let instruction = input[i]
        let inst_parts = instruction.split(' ')
        if (inst_parts[0] == "aim"){
            position = parseInt(inst_parts[1])
        }
        if (inst_parts[0] == "forward") {
            position += parseInt(inst_parts[1])
            if (aim > 0) {
                depth += parseInt(inst_parts[1]) * aim
            }
        }
        if (inst_parts[0] == "down"){
            aim += parseInt(inst_parts[1])
        }
        if (inst_parts[0] == "up"){
            aim -= parseInt(inst_parts[1])
        }
    }
    console.log("Part 2: Pos x Depth = ", (depth*position))
}

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`Advent of Code 2021 - Day ` + day)
console.log(`part1: ${(p1end - p1start).toFixed(3)}ms`)
console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
