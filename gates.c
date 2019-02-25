#include <stdio.h>
#include <stdlib.h>


int main(){

    int n;
    char move;
    int x=0;
    int y=0;
    int coins=0;
    char moves[1000000];

    scanf("%i", &n);

    for(int i=0; i<=n; i++){
        scanf("%c", &move);
        moves[i]=move;
    }

    for(int i=0; i<n; i++){
        if(moves[i]=='R'){
            x++;
        }

        if(moves[i]=='U'){
            y++;
        }

        if(x==y && moves[i+1]=='R' && moves[i]=='R'){
            coins++;
        }

          if(x==y && moves[i+1]=='U' && moves[i]=='U'){
            coins++;
        }

    }

    printf("%i", coins);
    return 0;
}
