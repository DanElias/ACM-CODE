#include <stdio.h>

int main()
{
    int n; // n
    scanf("%d", &n);// obtengo n

    int x = n; // x empieza en n
    int y = n + 1; // y es n+1
    int z = n*(n + 1);// z es n*(n+1)

    //Egyptian Fractions

    printf(n == 1 ? "-1\n" : "%d %d %d\n", x, y, z); // if n==1 it is not possible to have distinct xyz cause of z multiplication by 1
    return 0;
}
