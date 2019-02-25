#include <iostream>
#include <string>
#include <vector>
#include <math.h>
#include <cstdlib>
using namespace std;

int main()
{
    int n;// este es el tamaño de la palabra
    string palabra; // esta es la palabra
    int cursor;// esta es la posicion donde empieza el cursor
    std::cin>>n;// obtengo los valores
    std::cin>>cursor;
    std::cin>>palabra;

    cursor--;// es para convertir la palabra a modo que empiece en 0 y sea más entendible
    n--;// es para convertir la palabra a modo que empiece en 0 y sea más entendible

    cursor = min(cursor, n - cursor);// así me voy a la primera mitad de la palabra.
    // Es decir que en caso de que el cursor esté en la segunda mitad... este mejor se irá a su equivalente espejo en la primera mitad.

    int middle = n/2;// encontrar la mitad de la palabra, hasta donde realizaremos movimientos

    int elemento_izq = cursor, elemento_der = cursor;
    //el elemento_izq es la letra que esté más a la izquierda a la cual tendremos que cambiar, nos ayudara a obtener los movimientos horizontales
    //el elemento_der es la letra que esté más a la derecha  a la cual tendremos que cambiar, nos ayudara a obtener los movimientos horizontales

    for(int i = cursor; i <= middle; i++){// analizamos de donde esté el cursor hasta la mitad.
        if(palabra[i] != palabra[n - i]){// si el elemento en i es diferente a su equivalente espejo en la segunda mitad entonces tendremos que modificarlo con teclas arriba o abajo
            elemento_der = i;
        }
    }

    for(int i = cursor; i >= 0; i--){// analizamos de donde esté el cursor hasta el inicio de la palabra
        if(palabra[i] != palabra[n - i]){// si el elemento en i es diferente a su equivalente espejo en la segunda mitad entonces tendremos que modificarlo con teclas arriba o abajo
            elemento_izq = i;
        }
    }

    int verticales = 0;// los movimientos hacia arriba o abajo que tendremos que realizar para cambiar la letra

    for(int i = elemento_izq; i <= elemento_der; i++){// de esta manera acortamos cuántos elementos habrá que cambiar de letra.
        verticales=verticales + min(abs(palabra[i] - palabra[n - i]), 26 - abs(palabra[i] - palabra[n - i]));
        //con esta operacion min verificamos qué es más rápido, si irnos hacia arriba o hacia abajo para encontrar la letra correspondiente.
        // así encontramos los movimientos verticales necesarios para que la letra sea igual a su gemela espejo en la otra mitad.
    }

    int horizontales = min((cursor - elemento_izq) + (elemento_der - elemento_izq), (elemento_der - cursor) + (elemento_der - elemento_izq));
    //con esto checo que es ocupa menos movimientos... si irme a la de izquierda a derecha o de derecha a izquierda

    int total = horizontales + verticales;
    cout << total;
}
