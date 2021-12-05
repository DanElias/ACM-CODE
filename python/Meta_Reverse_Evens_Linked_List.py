import math
# Add any extra import statements you may need here


class Node:
  def __init__(self, x):
    self.data = x
    self.next = None

# Add any helper functions you may need here


def reverse(head):
  # Write your code here
  start = head
  end = head
  while end.next:
    if end.next.data % 2 == 0:
      while end.next:
        if end.next.data % 2 == 0:
          end = end.next
        else:
          end = end.next
          break
      reverse_list(start, end)
      print(head)
      start = end
    else:
      end = end.next
      start = start.next
  return head 
  

def reverse_list(start, end):
  current = start
  prev = None
  if start.next:
    nxt = start.next
    while nxt and nxt != end:
      prev = current
      current = nxt
      nxt = nxt.next
      current.next = prev
      
    if end.data % 2 == 0 and not end.next:
      end.next = current
      start.next.next = None
      start.next = end
    elif start.data % 2 == 0:
      start.next = nxt.next
      nxt.next = start
      current.next = start
    else:
      start.next = current
      prev.next = nxt


# These are the tests we use to determine if the solution is correct.
# You can add your own at the bottom.

def printLinkedList(head):
  print('[', end='')
  while head != None:
    print(head.data, end='')
    head = head.next
    if head != None:
      print(' ', end='')
  print(']', end='')

test_case_number = 1

def check(expectedHead, outputHead):
  global test_case_number
  tempExpectedHead = expectedHead
  tempOutputHead = outputHead
  result = True
  while expectedHead != None and outputHead != None:
    result &= (expectedHead.data == outputHead.data)
    expectedHead = expectedHead.next
    outputHead = outputHead.next

  if not(outputHead == None and expectedHead == None):
    result = False

  rightTick = '\u2713'
  wrongTick = '\u2717'
  if result:
    print(rightTick, ' Test #', test_case_number, sep='')
  else:
    print(wrongTick, ' Test #', test_case_number, ': Expected ', sep='', end='')
    printLinkedList(tempExpectedHead)
    print(' Your output: ', end='')
    printLinkedList(tempOutputHead)
    print()
  test_case_number += 1

def createLinkedList(arr):
  head = None
  tempHead = head
  for v in arr:
    if head == None:
      head = Node(v)
      tempHead = head
    else:
      head.next = Node(v)
      head = head.next
  return tempHead

if __name__ == "__main__":
  head_1 = createLinkedList([1, 2, 8, 9, 12, 16])
  expected_1 = createLinkedList([1, 8, 2, 9, 16, 12])
  output_1 = reverse(head_1)
  check(expected_1, output_1)
  
  
  head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12])
  expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6])
  output_2 = reverse(head_2)
  check(expected_2, output_2)
  

  # Add your own test cases here
  
