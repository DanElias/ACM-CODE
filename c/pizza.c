8#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <float.h>

int main(){

    float r;
    float d;
    int n;
    int count=0;
    float xi;
    float yi;
    float ri;
    float hyp;

    scanf("%f", &r);
    scanf("%f", &d);
    scanf("%i", &n);

    for(int i=0; i<n ; i++){
        scanf("%f", &xi);
        scanf("%f", &yi);
        scanf("%f", &ri);

        hyp=sqrt((xi*xi)+(yi*yi));

        if((hyp+ri<=r) && (hyp>=r-d+ri)){
            count ++;
        }
    }

    printf("%i", count);
    return 0;
}
