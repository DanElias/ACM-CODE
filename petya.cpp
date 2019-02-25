#include <iostream>
#include <stdio.h>
using namespace std;

int main(){
    bool bandera = false;
    int num;
    cin>>num;
    // si es menor a 4 pues se termina
    if(num<4){cout<<"-1";return 0;}
    // i va a ser nuestro numero de 7sietes entonces
    // vamos a ir restando el número de sietes hasta que la diferencia entre el número de sietes y el numero dada sea multiplo de 4
    // con esto queremos lograr que el número de 4's sea el menor posible pero que el número de sietes sea el mayor posible
    for(int i=num/7;i>=0;i--){int j=num-(i*7); if (j%4==0){bandera=true;for (int cuatros=0;cuatros<j/4;cuatros++) cout<<4;for(int sietes=0;sietes<i;sietes++) cout<<7;break;}}
    if(!bandera)cout<<-1;
}
