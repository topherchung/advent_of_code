#!/usr/bin/env python3

import math

input = ""

testInput = ""

def challeng(val) -> int:

    #find the value of the bottom left corner. All squares are 1x1, 3x3, 5x5, 7x7, and so on, and steps by 2
    d = int(math.sqrt(val)) #this value is between d and d+1
    if d%2 == 0:
        d-=1
    ct = val - int(math.pow(d,2))

    if ct == 0:
        return 0
    
    dv = int(ct/(d+1))
    ct = ct-((d+1)*dv)
    de = int( math.floor((d+2)/2))

    pos = int(math.fabs(ct-((d+1)/2)))

    manhattan_dist = pos + de
    return manhattan_dist


def test_challeng():
    assert challeng(1) == 0
    assert challeng(12) == 3
    assert challeng(23) == 2
    assert challeng(1024) == 31

class spiralm():

    def __init__(self,dim):
        self.x = int(dim/2)
        self.y = int(dim/2)

        self.m = []
        for i in range(dim):
            self.m.append([])
            for j in range(dim):
                self.m[i].append(0)

        self.m[self.y][self.x] = 1
        self.d = 's'

    def nextCoordDir(self):
        x = self.x
        y = self.y
        if self.d == 's':
            if self.m[y][x+1] == 0:
                return (y,x+1,'e')
            else:
                return (y-1,x,'s')
        if self.d == 'e':
            if self.m[y+1][x] == 0:
                return (y+1,x,'n')
            else:
                return (y,x+1,'e')
        if self.d == 'n':
            if self.m[y][x-1] == 0:
                return (y,x-1,'w')
            else:
                return (y+1,x,'n')
        if self.d == 'w':
            if self.m[y-1][x] == 0:
                return (y-1,x,'s')
            else:
                return (y,x-1,'w')

    def getValue(self,dir,x,y):
        if dir == 'n':
            return self.m[y+1][x]
        if dir == 's':
            return self.m[y-1][x]
        if dir == 'e':
            return self.m[y][x+1]
        if dir == 'w':
            return self.m[y][x-1]
        if dir == 'ne':
            return self.m[y+1][x+1]
        if dir == 'nw':
            return self.m[y+1][x-1]
        if dir == 'se':
            return self.m[y-1][x+1]
        if dir == 'sw':
            return self.m[y-1][x-1]

    def sumAllAdjacentSqrs(self,x,y):
        sum = 0
        sum += self.getValue('n',x,y)
        sum += self.getValue('s',x,y)
        sum += self.getValue('e',x,y)
        sum += self.getValue('w',x,y)
        sum += self.getValue('ne',x,y)
        sum += self.getValue('nw',x,y)
        sum += self.getValue('se',x,y)
        sum += self.getValue('sw',x,y)

        return sum

    def writeNextSquare(self):
        c = self.nextCoordDir()
        y = c[0]
        x = c[1]
        d = c[2]
        s = self.sumAllAdjacentSqrs(x,y)
        self.m[y][x] = s

        self.x = x
        self.y = y
        self.d = d

        return s



def challeng2(val):
    sm = spiralm(301)

    s = sm.writeNextSquare()
    while s <= val:
        s = sm.writeNextSquare()

    return s

def test_challeng2():
    assert challeng2(2) == 4
    assert challeng2(4) == 5
    assert challeng2(10) == 11
    assert challeng2(11) == 23
    assert challeng2(23) == 25
    assert challeng2(25) == 26
    assert challeng2(26) == 54
    assert challeng2(54) == 57
    assert challeng2(362) == 747
    assert challeng2(747) == 806



def main():
    test_challeng()
    test_challeng2()

    val = challeng(347991)
    print("Answer 1: " + str(val))

    val = challeng2(347991)
    print("Answer 2: " + str(val))


if __name__ == "__main__":
    main()










