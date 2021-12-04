import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def count_subarrays(arr):
  # Write your code here
  # traverse array element by element
  # Expand left and right
    # if element before is smaller, expand left
    # if element after is smaller, expand right
  result = []
  
  for idx, num in enumerate(arr):
    subarrays = 1
    if idx > 0 :
      subarrays += expand_left(arr, idx, idx)
      subarrays += expand_right(arr, idx, idx)
    result.append(subarrays)
  return result
        
def expand_left(arr, left, idx):
  subarrays = 0
  while left - 1 >= 0:
    if arr[left - 1] < arr[idx]:
      left -= 1
      subarrays += 1
    else:
      break
  return subarrays
  
def expand_right(arr, idx, right):
  subarrays = 0
  n = len(arr)
  while right + 1 < n:
    if arr[right + 1] < arr[idx]:
      right += 1
      subarrays += 1
    else:
      break
  return subarrays

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
  test_1 = [3, 4, 1, 6, 2]
  expected_1 = [1, 3, 1, 5, 1]
  output_1 = count_subarrays(test_1)
  check(expected_1, output_1)
  
  test_2 = [2, 4, 7, 1, 5, 3]
  expected_2 = [1, 2, 6, 1, 3, 1]
  output_2 = count_subarrays(test_2)
  check(expected_2, output_2)

  # Add your own test cases here
  
