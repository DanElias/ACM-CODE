import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def are_they_equal(array_a, array_b):
  len_a = len(array_a)
  len_b = len(array_b)
  if len_a != len_b:
    return False
  
  dict_a = dict()
  dict_b = dict()
  
  for idx, num in enumerate(array_a):
    counts = dict_a.get(num, 0)
    dict_a[num] = counts + 1
    
  for idx, num in enumerate(array_b):
    counts = dict_b.get(num, 0)
    dict_b[num] = counts + 1 
  
  for key in dict_a.keys():
    counts_a = dict_a.get(key, -1)
    counts_b = dict_b.get(key, -1)
    if counts_a != counts_b:
      return False
    
  return True


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
  n_1 = 4
  a_1 = [1, 2, 3, 4]
  b_1 = [1, 4, 3, 2]
  expected_1 = True
  output_1 = are_they_equal(a_1, b_1)
  check(expected_1, output_1)

  n_2 = 4
  a_2 = [1, 2, 3, 4]
  b_2 = [1, 2, 3, 5]  
  expected_2 = False
  output_2 = are_they_equal(a_2, b_2)
  check(expected_2, output_2)

  # Add your own test cases here
  
