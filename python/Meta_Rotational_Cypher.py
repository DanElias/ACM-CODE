import math
# Add any extra import statements you may need here


# Add any helper functions you may need here

def rotate(char_code, lower_limit, upper_limit, positions, rotation_factor):
    return ((char_code - lower_limit + rotation_factor) % positions) + lower_limit


def rotationalCipher(input, rotation_factor):
  # Assumptions:
  # 1 A-Z alphabetic chars
  # 2 0-1 numeric chars
  # 3 other chars remain unchanged
  # Maximum rotation: many 1 million +
  
  # My approaches:
  # 1: inplace change, we just change the char at a certain position in the string
  #   Zebra-493?  -> string[0] -> ord(Z) ASCII CODE + rotation factor
  #     65 - 90 = [A-Z]   97 - 122 = [a-z]  48 - 57 [0-9]
  #     ord(Z) = 90 + 3 = 93 % 90 = 3 + 65 = 68 = C
  #     3 intervals to check where the char is
  # Big O Time complexity of this solution = O(n) we traverse each position one by one and calculate the new char to be there
  # Space complexity of this solution O(1) we change the string in-place without needing any other data structure
  
  # My Algorithm
  # a) traverse string char by char
  # b) get char ascii code with ord()
  # c) check interval were it belongs:
  #  c.1) if inside interval [65-90] or inside interval [97-122] or inside interval [48-57]
  #       add rotation factor, get upper limit modulo, add modeulo result to lower limit, convert code to char
  #  c.2) else if not in those intervals -> do nothing and keep traversing string
  
  
  # My Other possible approaches:
    # This could be parallelized as the same task is done for each char in the string giving a faster solution O(1) in case we           # have enough threads for each char

  # My Implementation:
  UPPERCASE_MIN = 65
  UPPERCASE_MAX = 90
  LOWERCASE_MIN = 97
  LOWERCASE_MAX = 122
  DIGIT_MIN = 48
  DIGIT_MAX = 57
  
  # String are inmmutable in python
  chars = list(input)
  
  for idx, char in enumerate(chars):
    char_code = ord(char)
    new_char_code = char_code
    if (char_code >= UPPERCASE_MIN and char_code <= UPPERCASE_MAX):
      new_char_code = rotate(char_code, UPPERCASE_MIN, UPPERCASE_MAX, 26, rotation_factor)

    elif (char_code >= LOWERCASE_MIN and char_code <= LOWERCASE_MAX):
      new_char_code = rotate(char_code, LOWERCASE_MIN, LOWERCASE_MAX, 26, rotation_factor)
        
    elif (char_code >= DIGIT_MIN and char_code <= DIGIT_MAX):
      new_char_code = rotate(char_code, DIGIT_MIN, DIGIT_MAX, 10, rotation_factor)
      
    else:
      continue
    
    chars[idx] = chr(new_char_code)

  return "".join(chars)
    

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
  input_1 = "All-convoYs-9-be:Alert1."
  rotation_factor_1 = 4
  expected_1 = "Epp-gsrzsCw-3-fi:Epivx5."
  output_1 = rotationalCipher(input_1, rotation_factor_1)
  check(expected_1, output_1)

  input_2 = "abcdZXYzxy-999.@"
  rotation_factor_2 = 200
  expected_2 = "stuvRPQrpq-999.@"
  output_2 = rotationalCipher(input_2, rotation_factor_2)
  check(expected_2, output_2)

  # Add your own test cases here
  
