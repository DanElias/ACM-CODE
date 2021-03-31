n = int(input())

for i in range(n):
    n_m = input()
    n = int(n_m[0])
    m = int(n_m[2])
    arr = list(map(lambda num : int(num), arr.split(" ")))
    j = n
    while n > 0:
        if n != arr[n-1]:
            break
        n -= 1
    if n == 0:
        for k in range(m):
            r_p = input()
        print(1)
    else:
        p_not = 1
        for k in range(m):
            r_p = input()
            r = int(r_p[0])
            p = float(r_p[2:])
            if r >= n:
                p_not *= (1-p)
        print(1-p_not)
