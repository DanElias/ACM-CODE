grp1 = []
grp2 = []

def  group(i):
    if i % 2 == 0:
        grp2.append(i)
        grp2.append(n + 1 - i)
    else:
        grp1.append(i)
        grp1.append(n + 1 - i)
    i += 1
    return i

def petya(n):
    i = 1
    n2 = n / 2
    isFourMultiple = n % 4 == 0
    if isFourMultiple:
        while i <= n2 :
            i = group(i)
    else: 
        while i < n2 :
            i = group(i)
        grp1.append(i)
        grp2.append(n + 1 - i)

    print(grp1)
    print(grp2)

n = int(input())
petya(n)