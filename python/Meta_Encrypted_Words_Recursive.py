import math
# Add any extra import statements you may need here


# Add any helper functions you may need here
def encriptRecursive(s, left, right): # abc, 0, 2 / abc, 0, 1 / abc, 0, 0 / abc, 1, 1 / abc 2, 2
  
  if left > right: # 0 == 0
    return ""
  
  if left == right:
    return s[left]
  
  mid = left + ((right - left) // 2); # 1 / 0 / 1
  mid_char = s[mid] # b / a
  result = [mid_char] # [b] / [a]
  
  #left
  result.append(encriptRecursive(s, left, mid - 1)) # [b, a] / [a, "", ""] / 
  #right
  result.append(encriptRecursive(s, mid + 1, right)) # / [a, "", ""]
  
  return "".join(result) # [a]

def findEncryptedWord(s):
  # Write your code here
  length = len(s)
  s_arr = list(s)
  result = encriptRecursive(s_arr, 0, length - 1)
  print(result)
  return result
  
  

# These are the tests we use to determine if the solution is correct.
# You can add your own at the bottom.

def printString(string):
  print('[\"', string, '\"]', sep='', end='')

test_case_number = 1

def check(expected, output):
  global test_case_number
  result = False
  if expected == output:
    result = True
  rightTick = '\u2713'
  wrongTick = '\u2717'
  if result:
    print(rightTick, 'Test #', test_case_number, sep='')
  else:
    print(wrongTick, 'Test #', test_case_number, ': Expected ', sep='', end='')
    printString(expected)
    print(' Your output: ', end='')
    printString(output)
    print()
  test_case_number += 1

if __name__ == "__main__":
  s1 = "abc"
  expected_1 = "bac"
  output_1 = findEncryptedWord(s1)
  check(expected_1, output_1)

  s2 = "abcd"
  expected_2 = "bacd"
  output_2 = findEncryptedWord(s2)
  check(expected_2, output_2)

  # Add your own test cases here
  
