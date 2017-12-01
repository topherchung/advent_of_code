#!/usr/bin/env python3

# http://adventofcode.com/2017/day/1
#
# Completed by Topher Chung
# Date: 12/1/2017
#
# --- Day 1: Inverse Captcha ---
#
# The night before Christmas, one of Santa's Elves calls you in a panic. "The printer's broken! We can't print the Naughty or Nice List!" By the time you make it to sub-basement 17, there are only a few minutes until midnight. "We have a big problem," she says; "there must be almost fifty bugs in this system, but nothing else can print The List. Stand in this square, quick! There's no time to explain; if you can convince them to pay you in stars, you'll be able to--" She pulls a lever and the world goes blurry.
#
# When your eyes can focus again, everything seems a lot more pixelated than before. She must have sent you inside the computer! You check the system clock: 25 milliseconds until midnight. With that much time, you should be able to collect all fifty stars by December 25th.
#
# Collect stars by solving puzzles. Two puzzles will be made available on each day millisecond in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
#
# You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."
#
# It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.
#
# The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.
#
# For example:
#
# 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
# 1111 produces 4 because each digit (all 1) matches the next.
# 1234 produces 0 because no digit matches the next.
# 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
# What is the solution to your captcha?
#
# Your puzzle answer was 1251.
#
# --- Part Two ---
#
# You notice a progress bar that jumps to 50% completion. Apparently, the door isn't yet satisfied, but it did emit a star as encouragement. The instructions change:
#
# Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.
#
# For example:
#
# 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
# 1221 produces 0, because every comparison is between a 1 and a 2.
# 123425 produces 4, because both 2s match each other, but no other digit has a match.
# 123123 produces 12.
# 12131415 produces 4.
# What is the solution to your new captcha?
#
# Your puzzle answer was 1244.
#
# Both parts of this puzzle are complete! They provide two gold stars: **


def sumCaptcha(numstr):

    numstr = numstr.strip()
    first = int(numstr[0])
    accumulator = 0

    for idx in range(len(numstr)):
        num = int(numstr[idx])
        if (len(numstr)-1) == idx:
            next_num = first
        else:
            next_num = int(numstr[idx+1])

        if num == next_num:
            accumulator = accumulator + num

    return accumulator

def sumCaptchaTests():
    assert sumCaptcha("1122") == 3
    assert sumCaptcha("1111") == 4
    assert sumCaptcha("1234") == 0
    assert sumCaptcha("91212129") == 9

def halfRoundSumCaptcha(numstr):
    numstr = numstr.strip()
    ln = len(numstr)

    acc = 0

    for i in range(ln):
        hr = i + int(ln/2)
        if (ln-1) < hr:
            hr = hr-ln

        if numstr[i] == numstr[hr]:
            acc = acc + int(numstr[i])
    return acc

def halfRoundSumCaptchaTests():
    assert halfRoundSumCaptcha("1212") == 6
    assert halfRoundSumCaptcha("1221") == 0
    assert halfRoundSumCaptcha("123425") == 4
    assert halfRoundSumCaptcha("123123") == 12
    assert halfRoundSumCaptcha("12131415") == 4

if __name__ == "__main__":
    #run unit tests
    sumCaptchaTests()
    halfRoundSumCaptchaTests()

    #run challenge
    fp = open('input.txt')
    numstr = fp.readline()
    fp.close()

    captcha = sumCaptcha(numstr)
    print("Sum Captcha = " + str(captcha))

    captcha = halfRoundSumCaptcha(numstr)
    print("Half Round Sum Captcha = " + str(captcha))


