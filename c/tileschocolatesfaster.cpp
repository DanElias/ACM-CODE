/*
    Author: Dan Elias
    Problem: Joty and Chocolate 678 C
    Date: 17/03/2019
*/

#include<bits/stdc++.h>
using namespace std;

int main(){
        long long int a,b,p,q,n,na,nb,common,lcm;
        cin>>n>>a>>b>>p>>q;
        na=n/a; // me va a dar todos los tiles que puedo pintar de rojo
        nb=n/b; // me va a dar todos los tiles que puedo pintar de azul
        lcm=(a*b)/__gcd(a,b); // es el least common multiplier, gcd es el greatest common denominator

        //¿por que saco el least common multiplier: para poder saber cuantos tiles pueden ser pintados de rojo o de azul
        // se usan el minimo comun multiplo ya que este es el numero por el cual tendremos que dividir a n para saber
        // cuantos tiles podemos pintar o de rojo o de azul, podríamos dejar la simple multiplicacion de a *b peroo.....
        // lo correcto es encontrar el MINIMO comun multiplo, es posible que ese a*b no sea el multiplo común más pequeño de ambos
        // es por eso que debemos de dividr a*b entre el MAXIMO comun divisior, para encontrar el minimo comun multiplo.

        //EJEMPLO: tenemos el 4 y 6, su MCD sería 2 porque el 2 divide a 4 y a 6
        //si solo multiplicamos a 4*6 tenemos el numero 24 pero este no es el mcm, ya que si nos damos cuenta
        // el mcm sería 12 ya que 4*3=12 y 6*2=12, si podemos ver coincide que a*b/MCD es igual al mcm
        //ENTONCES en el ejemplo tendriamos 24/2=12 donde 12 es el mcm, que nos permitirá saber cuantos n podrán
        //ser pintados de azul o de rojo

        common=n/lcm; // me va a dar todos los tiles que puedo pintar de azul o de rojo

        na-=common; // como en los rojos ya estou incluyendo algunos de los que también puedo pintar de azul, le quito los comunes
        nb-=common; // como en los azules ya estoy incluyendo algunos de los que también puedo pintar de rojo, le quito los comunes

        long long int total=(na*p)+(nb*q)+(max(p,q)*common); // el total ya solo se calcular de la siguiente manera
        // todos los que puedo pintar de rojo se multiplican por sus chocolates p
        //todos los que puedo pintar de azul se multiplican por sus chocolates q
        //todos los que puedo pintar de ambos colores, se multiplican por el p o q que sea mas grande para maximizar el num.
        cout<<total;
        return 0;
}

