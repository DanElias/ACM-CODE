#include <stdlib.h>
#include<stdio.h>
#include <math.h>
#include<stdbool.h>

bool prime(int n){

    for (int i = 2; i < n; i++)
        if (n % i == 0)
        return false;
    return true;

}

int main(){

    int n;
     int checktprimes[n];
    int i;
    int j=0;
    bool esprimo;
    int primes[100000];
    int index=0;
    bool isprime=false;
    bool istprime=false;

    scanf("%i", &n);


    for(int i=0; i<n; i++){
        scanf("%i", &checktprimes[i]);//
    }

    for(int numbercheckprime=2; numbercheckprime<1000001; numbercheckprime++){
        isprime=prime(numbercheckprime);
        if(isprime){
            primes[index]=numbercheckprime;
            index++;
        }
    }

    for(int i=0; i<sizeof(checktprimes)/sizeof(int); i++){

        for(int j=0; j<sizeof(primes)/sizeof(int); j++){
            if(checktprimes[i]==(primes[j]*primes[j])){
                istprime=true;
                break;
            }
        }

        if(checktprimes[i]==1){
            istprime=false;
        }

        if(istprime){
            printf("YES\n");
        }
        else{
            printf("NO\n");
        }

        istprime=false;
    }

    return 0;
}
