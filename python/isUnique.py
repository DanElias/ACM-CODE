'''
CTCI - Arrays and Strings 1.1
Determine if a string has all unique characters
Use no aditional Data Structures
'''

'''
1. Use a set to store previously seen values
'''
def isUnique (str):
    char_set = set()
    for i in range(len(str)):
        if str[i] in char_set:
            return False
        char_set.add(str[i])
    return True

'''
2. Char set
Ask if we are using ASCII(128) or UNICODE (more size)
Extended ASCII (256)
Use the char as int to access its position in char_set boolean list
'''
def isUnique2 (str):
    if len(str) > 128:
        return False
    char_set = [False] * 128
    for i in range(len(str)):
        char_int = ord(str[i])
        if char_set[char_int]:
            return False
        char_set[char_int] = True
    return True

'''
3. Bit Manipulation
'''
def isUnique3 (str):
    checker = 0
    for i in range(len(str)):
        char_int = ord(str[i]) - ord('a')
        if checker & (1 << char_int) > 0:
            return False
        checker |= (1 << char_int)
    return True

print(isUnique3("hello"))

exit