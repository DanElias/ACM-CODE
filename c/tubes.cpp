#include <iostream>
#include <stdio.h>
using namespace std;

int main(){
    int n, m, k;
    cin>>n>>m>>k;
    int j=1, i=1;
    int divisions=n*m/k;
    int remainder=(n*m)%k;
    int auxcont=divisions;
    int printed=0; // numero de casillas que ya se han impreso
    cout<<divisions<<" ";
    for(i;i<=n;i++){
        if(i%2!=0){//renglones impares
            for(j=1;j<=m;j++){
                cout<<i<<" "<<j<<" ";
                printed++;
                auxcont--;
                if(auxcont<=0){// aqui tengo que hacer un salto de l�nea cuando el tama�o de cada tubo se hayan terminado
                    if(printed+remainder==n*m){
                        auxcont=remainder;
                    }
                    else{
                        auxcont=divisions;
                        cout<<endl;
                        if(printed+remainder+auxcont==n*m){
                            auxcont=auxcont+remainder;
                        }
                        if(printed!=n*m){
                            cout<<auxcont<<" ";
                        }
                    }
                }
            }

        }
        if(i%2==0){//renglones pares
            for(j=m;j>0;j--){
                cout<<i<<" "<<j<<" ";
                auxcont--;
                printed++;
                 if(auxcont<=0){// aqui tengo que hacer un salto de l�nea cuando el tama�o de cada tubo se hayan terminado
                    if(printed+remainder==n*m){
                        auxcont=remainder;
                    }
                    else{
                        auxcont=divisions;
                        cout<<endl;
                        if(printed+remainder+auxcont==n*m){
                            auxcont=auxcont+remainder;
                        }
                        if(printed!=n*m){
                            cout<<auxcont<<" ";
                        }

                    }
                }
            }
        }
    }
}
