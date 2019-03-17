/*
    Author: Dan Elias
    Problem: Little Elephant and Squares  259B
    Date: 17/03/2019
*/

#include <iostream>
using namespace std;
int main()
{
    //son todas mis posiciones
    int pos00,pos01,pos02,pos10,pos11,pos12,pos20,pos21,pos22;
    cin>>pos00>>pos01>>pos02>>pos10>>pos11>>pos12>>pos20>>pos21>>pos22;
    //Analizando la matriz vemos que la suma de la diagonal va a ser igual a la mtad de
    //la suma de todos los valores de las otras posiciones de la matriz
    int sum=(pos01+pos02+pos10+pos12+pos20+pos21)/2;
    //La posiciones de la diagonal se pueden calcular o con las horizontales o verticales
    //solo le restas a la suma las dos posiciones que si estan, en este caso en la horizontal
    pos00=sum-pos01-pos02;pos11=sum-pos10-pos12;pos22=sum-pos20-pos21;
    //al final ya solo se imprime.
    cout<<pos00<<" "<<pos01<<" "<<pos02<<endl<<pos10<<" "<<pos11<<" "<<pos12<<endl<<pos20<<" "<<pos21<<" "<<pos22<<endl;
    return 0;
}




