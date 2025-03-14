#!/usr/bin/python3


def islower(c):
    # ord() function returns the ASCII value of a character
    ascii_value = ord(c)
    # ASCII values for lowercase letters are from 97 ('a') to 122 ('z')
    return 97 <= ascii_value <= 122


# Test cases
if __name__ == "__main__":
    print("a is {}".format("lower" if islower("a") else "upper"))
    print("H is {}".format("lower" if islower("H") else "upper"))
    print("A is {}".format("lower" if islower("A") else "upper"))
    print("3 is {}".format("lower" if islower("3") else "upper"))
    print("g is {}".format("lower" if islower("g") else "upper"))
