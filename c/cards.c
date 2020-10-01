
# include<stdio.h>
# include<stdlib.h>

int main(){

    int n;
    int num;

    scanf("%i", &n);

    int cards[n];

    for(int i=0; i<n; i++){
        scanf("%i", &num);
        cards[i]=num;
    }



    int i=0;
    int j=n-1;
    int turn=1;
    int acum1=0;
    int acum2=0;

    while(i!=j){

        if(turn==1){
            if(cards[i]>=cards[j]){
                acum1=acum1+cards[i];
                i++;
            }
            else{
                acum1=acum1+cards[j];
                j--;
            }
            turn=2;
        }

        else{
            if(cards[i]>=cards[j]){
                acum2=acum2+cards[i];
                i++;
            }
            else{
                acum2=acum2+cards[j];
                j--;
            }
            turn=1;

        }


    }

    if(i==j && turn==1){
            acum1=acum1 + cards[i];
        }

        if(i==j && turn==2){
            acum2=acum2 + cards[i];
        }

    printf("%i ", acum1);
    printf("%i", acum2);

    return 0;
}
