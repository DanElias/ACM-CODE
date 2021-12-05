import math
# Add any extra import statements you may need here
from operator import itemgetter

# Add any helper functions you may need here
def findPositions(arr, x):
  q = [(v, i) for i, v in enumerate(arr, start=1)]
  output = []

  for _ in range(x):
    tmp = q[:x]
    max_item = max(tmp, key=itemgetter(0))
    output.append(max_item[1])
    tmp.remove(max_item)
    # decrement value by 1 for each item unless it's 0
    tmp = [(v - 1, i) if v > 0 else (v, i) for v, i in tmp]
    q = q[x:] + tmp
  return output


"""
def findPositions(arr, x):
  # Write your code here
  
  res = []
  length = len(arr)
    
  for i in range(x):
    max_num_index = -1
    max_num = -1
    popped_nums = []
    
    for index in range(x):
      if len(arr) > 0:
        num = arr.pop(0)
      
        if num > max_num:
          max_num_index = index
          max_num = num

        popped_nums.append(num)

    for idx, num in enumerate(popped_nums):
      if idx == max_num_index:
        res.append(((idx + (i * x)) % (length - i + 1)) + 1)
        
        continue
      if num - 1 >= 0:
        arr.append(num - 1)
      else:
        arr.append(0)

  return res
"""

# These are the tests we use to determine if the solution is correct.
# You can add your own at the bottom.

def printInteger(n):
  print('[', n, ']', sep='', end='')

def printIntegerList(array):
  size = len(array)
  print('[', end='')
  for i in range(size):
    if i != 0:
      print(', ', end='')
    print(array[i], end='')
  print(']', end='')

test_case_number = 1

def check(expected, output):
  global test_case_number
  expected_size = len(expected)
  output_size = len(output)
  result = True
  if expected_size != output_size:
    result = False
  for i in range(min(expected_size, output_size)):
    result &= (output[i] == expected[i])
  rightTick = '\u2713'
  wrongTick = '\u2717'
  if result:
    print(rightTick, 'Test #', test_case_number, sep='')
  else:
    print(wrongTick, 'Test #', test_case_number, ': Expected ', sep='', end='')
    printIntegerList(expected)
    print(' Your output: ', end='')
    printIntegerList(output)
    print()
  test_case_number += 1

if __name__ == "__main__":
  n_1 = 6
  x_1 = 5
  arr_1 = [1, 2, 2, 3, 4, 5]
  expected_1 = [5, 6, 4, 1, 2]
  output_1 = findPositions(arr_1, x_1)
  check(expected_1, output_1)

  n_2 = 13
  x_2 = 4
  arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4]
  expected_2 = [2, 5, 10, 13]
  output_2 = findPositions(arr_2, x_2)
  check(expected_2, output_2)

  # Add your own test cases here
  
