import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def numberOfWays(arr, k):
   # Write your code here
   # Returns the number of pairs which are equal to a given sum
   # They can be duplicated
   # You cannot sum the current number with itself
   
   # My approach
   # Use a dictionary/hash map to map the values and their positions (to not have duplicated values)
   # have a matrix as a graph to store previously seen sums

  nums_dict = dict()
  sums = 0
  n = len(arr)
  seen_sums = list(range(n))

  for idx, num in enumerate(arr):
    positions = nums_dict.get(num, list())
    positions.append(idx)
    nums_dict[num] = positions
    seen_sums[idx] = [0] * n
    
  for idx, num in enumerate(arr):
    target = k - num
    positions = nums_dict.get(target, None)
    if positions:
      for position in positions:
        if position != idx and seen_sums[idx][position] == 0 and seen_sums[position][idx] == 0:
          sums += 1
          seen_sums[idx][position] = 1
          seen_sums[position][idx] = 1
  
  return sums



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
  k_1 = 6
  arr_1 = [1, 2, 3, 4, 3]
  expected_1 = 2
  output_1 = numberOfWays(arr_1, k_1)
  check(expected_1, output_1)
  
  k_2 = 6
  arr_2 = [1, 5, 3, 3, 3]
  expected_2 = 4
  output_2 = numberOfWays(arr_2, k_2)
  check(expected_2, output_2)

  # Add your own test cases here
  
