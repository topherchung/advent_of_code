def isPassPhraseValid1(pp : str) -> bool:
    pp = pp.strip()
    l = pp.split(" ")
    for w in l:
        temp = list(l)
        temp.remove(w)
        if w in temp:
            return False
    return True

def isAnagram(w1,w2):
    return sorted(w1) == sorted(w2)


def isPassPhraseValid2(pp: str)-> bool:
    pp = pp.strip()
    l = pp.split(" ")
    for w in l:
        temp = list(l)
        temp.remove(w)
        for w2 in temp:
            if isAnagram(w,w2):
                return False
    return True

c = 0
with open("input.txt") as f:
    for line in f:
        if isPassPhraseValid1(line):
            c+=1
f.close()
print("# of Valid Pass Phrases 1 is: " + str(c))

c=0
with open("input.txt") as f:
    for line in f:
        if isPassPhraseValid2(line):

            c+=1

print("# of Valid Pass Phrases 2 is: " + str(c))
