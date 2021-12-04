import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def matching_pairs(s, t):
  # Write your code here
  if not s or not t:
    return 0
  
  LEN_S = len(s)
  LEN_T = len(t)

  if not LEN_S or not LEN_T:
    return 0
  
  unmatched_s = set()
  unmatched_t = set()
  chars_s = list(s)
  chars_t = list(t)
  
  for i in range(LEN_S):
      if chars_s[i] != chars_t[i]:
          unmatched_s.add(chars_s[i])
          unmatched_t.add(chars_t[i])

  if not unmatched_s:
    return LEN_S - 2

  res = LEN_S - len(unmatched_s)
  
  contains = 0;
  for ch in unmatched_s:
      if ch in unmatched_t:
          contains += 1
          if contains == 2:
            break

  return res + contains


# These are the tests we use to determine if the solution is correct.
# You can add your own at the bottom.

def printInteger(n):
  print('[', n, ']', sep='', end='')

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
    printInteger(expected)
    print(' Your output: ', end='')
    printInteger(output)
    print()
  test_case_number += 1

if __name__ == "__main__":
  s_1, t_1 = "abcde", "adcbe"
  expected_1 = 5
  output_1 = matching_pairs(s_1, t_1)
  check(expected_1, output_1)

  s_2, t_2 = "abcd", "abcd"
  expected_2 = 2
  output_2 = matching_pairs(s_2, t_2)
  check(expected_2, output_2)

  # Add your own test cases here
  
