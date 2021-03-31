import math

def groups(n):
    i = 1
    n2 = n / 2
    res = ""
    # Based on multiples of 4
     # Test: 4 and 6
    if n % 2 == 0:
        # If it is a multiple of 4 then we use the logic of Gauss sum
        # summing first with last, second with pre-last and so on
        res = str(int(n / 2)) + " " # size of  group1 is n / 2
        while i < n2:
            res = res + str(i) + " " + str(n + 1 - i) + " "
            i += 2
        if n % 4 == 0:
            print("0")
        else:
            # Else the pair of number in the center of 1 .... n will need
            # to be divided, one goes to group 1 and the other to group 2
            # and their difference is therefore 1
            print("1")
            res = res + str(i)
    else:
        res = str(int((n + 1) / 4) * 2) + " " # Size of grp1 for odd n
        lm = int((n + 1) / 4) # only iterate till this num
        # Test: 7
        if (n + 1) % 4 == 0:
            print("0")
            while i <= lm :
                res = res + str(i) + " "
                if i == lm:
                    # If we reach the inner part before reaching the limit
                    # then we switch, instead of choosing the pair
                    # as in the Gaussian sum, we choose the num in the center
                    res = res + str(int((n + 1) / 2)) + " "
                else:
                    # Choose its pair as in the Gaussian sum
                    res = res + str(n + 1 - i) + " "
                i += 1
        # Test: 5
        else:
            print("1")
            while i <= lm:
                if i == lm:
                    # If we reach the inner part before reaching the limit
                    # then we switch, we choose the num in the center, and the
                    # Gaussian sum pair of the i we had
                    res = res + str(int((n + 1) / 2)) + " " + str(n + 1 - i) + " "
                else:
                    # Choose its pair as in the Gaussian sum
                    res = res + str(i) + " " + str(n + 1 - i) + " "
                i += 1
    print(res)		

n = int(input())
if n == 2:
    print("1")
    print("1 1")
else:
    groups(n)

