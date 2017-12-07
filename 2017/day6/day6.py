#!/usr/bin/env python3
import sys
sys.setrecursionlimit(9999)


input = [14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4]
test_input = [0,2,7,0]

class challenge1():

    def __init__(self,input):
        s = list(input)
        self.m_state = [s]   #type: List(List(int))
        self.m_count = 0     #type:int
        self.m_distance = -1 #type:int

    def run(self):
        while True:
            l = len(self.m_state)
            last = list(self.m_state[-1])

            #recurse base condition check
            #check to see if this state has been seen before
            if l > 1:
                if last in self.m_state[0:-1]:
                    self.m_distance = (l-1)-self.m_state.index(last)
                    return self.m_count

            #distribute largest value
            #1 find largest value
            v = max(last)
            iLg = last.index(max(last))

            #2 distribute
            last[iLg] = 0
            i = iLg+1
            bound = len(last)-1
            for c in range(v):
                if bound < i:
                    i = 0
                last[i]+=1
                i+=1

            newState = list(last)

            self.m_state.append(newState)
            self.m_count+=1

            #if self.m_count % 100 == 0:
                #print(self.m_count)

    def getDistance(self):
        return self.m_distance

    def getCount(self):
        return self.m_count


def test_challenge1():
    c = challenge1(test_input)
    c.run()
    print("Test count = " + str(c.getCount()))
    print("Test distance= " + str(c.getDistance()))


def main():
    test_challenge1()

    c = challenge1(input)
    c.run()
    print("Challenge 1 Count = " + str(c.getCount()))
    print("Challenge 2 Distance= " + str(c.getDistance()))


if __name__ == "__main__":
    main()



