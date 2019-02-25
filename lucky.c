#include <stdlib.h>
#include <stdio.h>

int main(){

    int num;


int a[10]={4,7,47,74,474,447,477,744,747,774};

printf("%i", a*);

scanf("%i", &num);

int bandera=0;

for(int i=0; i<10; i++){
    if(num%a[i]==0){
        bandera=1;
    }
}

if(bandera==1){
    printf("YES");
}
else{
    printf("NO");
}

return 0;
}



