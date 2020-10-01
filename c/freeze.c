# include<stdio.h>
# include<stdlib.h>
#include <math.h>


int divisor(int q){
    int i;
    for(i=2; i<q; i++){
        if(q%i==0){
            return i;
        }
    }

    return 0;
}


int main(){

    int q;
    int ans;
    int one=0;
    int turn=0;

    scanf("%d", &q);

    do{
        turn++;
        q=divisor(q);
    }while(q!=0);



    if(turn%2==0){
        printf("1");
        one=1;
    }
    else
        printf("2");


    if(turn==1){
        printf("\n%i", ans);
    }


}
