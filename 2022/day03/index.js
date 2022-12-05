
import { importFile } from '../../util/index.mjs'
import * as fs from 'fs';

console.clear()

const day = '03'
const dir = '.'
//let filename = `${day}.sample`
let filename = `${day}.in`
let input = importFile(dir, filename).split('\n')

const priority = {
   a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,
   A:27,B:28,C:29,D:30,E:31,F:32,G:33,H:34,I:35,J:36,K:37,L:38,M:39,N:40,O:41,P:42,Q:43,R:44,S:45,T:46,U:47,V:48,W:49,X:50,Y:51,Z:52
}


const part1 = () => {
    let count = {}
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        let half = Math.ceil(input[i].length / 2);
        let firstHalf = input[i].slice(0, half)
        let secondHalf = input[i].slice(half)
        for (let j=0;j<firstHalf.length;j++){
            if (secondHalf.includes(firstHalf[j]) ) {
                sum += priority[firstHalf[j]];
                break;
            }
        }
    }
    return sum;
}



const part2 = () => {
    let sum = 0
    for(let i = 0; i < input.length; i+=3) {
        let sack1 = input[i]
        let sack2 = input[i+1]
        let sack3 = input[i+2]
        for (let j=0; j<sack1.length;j++){
            if (sack2.includes(sack1[j]) && sack3.includes(sack1[j])){
                sum+=priority[sack1[j]];
                break;
            }
        }
    }
    return sum
}

console.log(`Advent of Code 2022 - Day ` + day)

const p1start = performance.now()
const p1 = part1()
const p1end = performance.now()

console.log('part1', p1)

const p2start = performance.now()
const p2 = part2()
const p2end = performance.now()

console.log(`part2: ${(p2end - p2start).toFixed(3)}ms`)
console.log('part2', p2)

let content = "## Javascript\n"
content += (`[![Part 1](https://img.shields.io/badge/Part%201-${(p1end - p1start).toFixed(3)}ms-informational)](https://adventofcode.com/2022/)`) + "\n"
content += (`[![Part 2](https://img.shields.io/badge/Part%201-${(p2end - p2start).toFixed(3)}ms-informational)](https://adventofcode.com/2022/)`) + "\n"

fs.writeFile('readme.md', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});