#include <stdio.h>
#include<stdlib.h>

//Mr. Santa asks all the great programmers of the world to solve a trivial problem.
//He gives them an integer m and asks for the number of positive integers n, such that the
//factorial of n ends with exactly m zeroes. Are you among those great programmers who can solve this problem?

int findTrailingZeros(int n)
{
    // Initialize result
    int count = 0;

    // Keep dividing n by powers of
    // 5 and update count
    for (int i = 5; n / i >= 1; i *= 5)
        count= count + n/i;

    return count;
}

int main(){
    int m;
    int nums[1000000];
    int i=0;

    scanf("%i", &m);

    for(int n=1; n<1000000; n++){
        if(findTrailingZeros(n) == m){
            nums[i]=n;
            i++;
        }
    }

    printf("%i\n", i);

    for(int j=0; j<i; j++){
        printf("%i ", nums[j]);
    }

    return 0;
}
