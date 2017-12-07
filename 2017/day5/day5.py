


def numStepsToRunInstructions1(instructions):
    ip = 0
    s = 0
    while True:
        jmp = instructions[ip]
        instructions[ip]+= 1
        ip = ip+jmp
        s+=1
        if ip < 0 or ip > len(instructions)-1:
            break
    return s

def numStepsToRunInstructions2(instructions):
    ip = 0
    s = 0
    while True:
        jmp = instructions[ip]

        if jmp >= 3:
            instructions[ip]-= 1
        else:
            instructions[ip]+= 1
        ip = ip+jmp
        s+=1
        if ip < 0 or ip > len(instructions)-1:
            break
    return s

assert numStepsToRunInstructions1([0,3,0,1,-3]) == 5
assert numStepsToRunInstructions2([0,3,0,1,-3]) == 10


input = []
with open("input.txt") as f:
    for line in f:
        input.append(int(line))

    temp = list(input)

    s = numStepsToRunInstructions1(temp)
    print("# Steps 1: " + str(s))

    temp = list(input)
    s = numStepsToRunInstructions2(temp)
    print("# Steps 2: " + str(s))



