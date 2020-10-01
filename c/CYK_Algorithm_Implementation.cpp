
/*
    Author: Daniel Elias Becerra
    Date: April 06th, 2019

    The Cocke–Younger–Kasami algorithm (also called CYK) is a parsing algorithm for context free grammars (CFG),
    named after its inventors, John Cocke, Daniel Younger and Tadao Kasami.

    It is considered a bottom-up parser that uses dynamic programming to build an AST of a given input string.
    The standard version of CYK works only on CFG given in Chomsky normal form (CNF).

    It is one of the most efficient parsing algorithms in terms of worst-case asymptotic complexity, although
    other algorithms exist with better average running time.

    https://www.xarg.org/tools/cyk-algorithm/?fbclid=IwAR10FZ5KiIqDSfBqFtxU7vZS1n9s7_5zJsbaWVBLpBJ9Z7WzwRLLGza50fI

    In this implementation I used maps and sets, which help to reduce memory complexity and running time.
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    map<string, set<string> > productions;
    // tiene todas las producciones
	string s, aux="";
	// s es cada string de input dado, aux es para obtener las producciones
	string inicial;
	// es el simbolo inicial
	int primero=1;
	//bandera que indica si ya se guardo el simbolo inicial
	set<string> nterminales;
	//simbolos no terminales
	set<string> terminales;
	//simbolos terminales;
	string simbolo;
	//simbolo que voy a guardar en el set del mapa
	set<string> auxset1,auxset2;
	//me ayudan a insertar un set en el mapa
	vector<string> cadenas;
	//las cadenas que voy a parsear

    while(getline(cin,s)){
            if(s.empty()) break;

            if(s.at(0) > 64 && s.at(0) < 91){ //si empieza con mayuscula es produccion
                if(primero){// guardo el simbolo inicial
                   inicial=s.at(0);
                   primero=0;
                }
                simbolo=s.at(0);
                nterminales.insert(simbolo); // guardo los simbolos no terminales

                for(int i=2; i<s.size(); i++){
                    if(s.at(i)!=' '){
                        aux=aux+s.at(i);
                        if(i+1==s.size()){ // guarda lo ultimo en el mapa, porque ya no hay espacios en blanco que reinicialicen todo y guarden el strign aux generado
                            simbolo=s.at(0);
                            if(!(productions[aux].empty())){ // puede ser que una llave sea productido por dos simbolos distintos
                                auxset1=productions[aux]; // con esta parte checo si ya había algo, lo saco y le agrego lo nuevo
                                auxset2.insert(auxset1.begin(), auxset1.end());
                            }
                            auxset2.insert(simbolo); // inserto el simbolo nuevo
                            productions[aux]=auxset2; // inserto el set con los simbolos al mapa
                            if((aux.at(0)>=33 && aux.at(0)<=64) || (aux.at(0)>=91 && aux.at(0)<=126)){
                                terminales.insert(aux); // guardo terminales
                            }
                            aux=""; // reinicializo todo
                            auxset1.clear();
                            auxset2.clear();
                        }
                    }
                    else{
                        simbolo=s.at(0);//aqui vuelvo a hacer lo que hago arriba pero este es el caso cuando sigue un espacio
                        if(!(productions[aux].empty())){
                            auxset1=productions[aux];
                            auxset2.insert(auxset1.begin(), auxset1.end());
                        }
                        auxset2.insert(simbolo);
                        productions[aux]=auxset2;
                         if((aux.at(0)>=33 && aux.at(0)<=64) || (aux.at(0)>=91 && aux.at(0)<=126)){
                            terminales.insert(aux);
                         }
                         aux="";
                         auxset1.clear();
                        auxset2.clear();
                    }
                }
            }
            else{ // si no empieza con mayúscula entonces ahora estamos leyendo las cadenas
                cadenas.push_back(s);
            }
    }

    int n=terminales.size();//numero de simbolos terminales
    int m=nterminales.size();//numero de simbolos no terminales
    set<string> T, auxset3;// T son los sets que se van generando
    map<string,set<string> >::const_iterator it; // el iterador del mapa, se va recorriendo
    string currentcadena; // la cadena actual que se está revisando
    set<string> resultados[100][100]; // la matrix en escalera que va guardando lo que hizo que se generaran las producciones de los renglones anteriores

    for(int icad=0; icad<cadenas.size(); icad++){// voy checando cada cadena dada

        currentcadena=cadenas.at(icad);// guardo la cadena actual a revisar

        for(int i=0; i<currentcadena.size(); i++){
            //en este for se van a ir guardando en sets todas aquellos simbolos no terminales(ya sea en parejas o solos)
            //que generaron los simbolos terminales de la cadena
            //este primer recorrido se va a guardar en el primer renglon de la matriz
            T.clear(); // limpio mi T
            for(it=productions.begin(); it!=productions.end(); it++){
                if(((it->first)[0]>=33 && (it->first)[0]<=64) || ((it->first)[0]>=91 && (it->first)[0]<=126)){
                    if((it->first)[0]==currentcadena.at(i)){
                        auxset3=it->second;
                        T.insert(auxset3.begin(), auxset3.end());
                    }
                }
            }
            resultados[0][i]=T;
        }
        set<string> currentcheck; // este es un set que va a guardar unas combinaciones
        // como se da la GLC en forma de Chmosky, se van tomando produciones de a lo más dos símbolos no terminales
        //Ok la matriz se recorre de manera interesante;
        //se recorre en dos casillas, la primera avanza de arriba hacia abajo en la misma columna
        //la segunda casilla se mueve de abajo hacia arriba en forma de escalera hacia la derecha
        set<string> primerset;//aqui se van guardando las producciones que estan en los sets que se van obteniendo en el recorrido de arriba hacia abajo en la misma columna
        set<string> segundoset;// aqui se van guardando las producciones que estan en los sets que van obteniendo en el recorrido de escalera
        set<string> auxset4; // me sirve al rato como un set auxiliar.

        for(int i=1; i<currentcadena.size(); i++){// recorro todos los renglones de la matriz
            for(int j=0; j<currentcadena.size()-i; j++){// recorro las columnas de tal manera que me queda una escalera, se va reduciendo el num de columnas revisadas
                T.clear();//reinicializo todos mis sets
                currentcheck.clear();
                primerset.clear();
                segundoset.clear();
                for(int k=0; k<i; k++){
                    primerset=(resultados[k][j]); //me regresa un set -> el que esta en la casilla que se va recorriendo de arriba hacia abajo
                    segundoset=resultados[i-(k+1)][j+1+k]; // me regresa un set -> el que esta la casilla que se va recorriendo en forma de escalera
                    //ahora tengo que concatenar esos sets
                    //son dos porque es forma de chomsky
                    //pero es posible que en esos sets haya mas de un string, obviamente diferentes
                    //entonces hay que hacer una concatenacion de los dos sets obteniendo todos los strings posibles
                    //es como una expresion regular de ab donde a=setuno b=setdos y ab el conjunto de posibles cadenas generadas

                    for(set<string>::const_iterator iterador=primerset.begin(); iterador!=primerset.end(); ++iterador){
                        for (set<string>::const_iterator iterador2=segundoset.begin(); iterador2!=segundoset.end(); ++iterador2){
                            currentcheck.insert(*iterador+*iterador2);//guarda la combinacion generada en mi set llamado currentcheck
                        }//genera todas las combinaciones y las guarda en un vector de strings
                        //entonces currentcheck tiene todas mis combinaciones generadas, sin repeticiones para ahorrar espacio
                    }

                    for(it=productions.begin(); it!=productions.end(); it++){// aquí voy checando todas las producciones que tengo registrados
                        if((it->first)[0] > 64 && (it->first)[0] < 91){ //si es un simbolo no terminal(letras mayusculas)
                            for (set<string>::const_iterator otroit=currentcheck.begin(); otroit!=currentcheck.end(); ++otroit){//voy revisando todas las cadenas que resultaron de la concatenacion de las dos casillas (columna y escalera)
                                if(it->first==*otroit){// en esta parte voy guardando todas las producciones que generaron la cadena
                                    auxset4=it->second;//si coinciden entonces guardo esa produccion en un set
                                    T.insert(auxset4.begin(), auxset4.end());// insertor ese set en un set mas grande llamado T
                                    //T va a tener todas las producciones que generaron todas las cadenas en currentcheck
                                }
                            }
                        }
                    }
                }
                resultados[i][j]=T;//voy guardando en cada casilla de la matriz todo lo que genero lo anterior
            }
        }

        //al final terminare con la casilla igual a setfinal, la punta de la piramide por así decirlo o el escalon mas alto
        int tamano=currentcadena.size();
        set<string> setfinal=resultados[tamano-1][0];

        //si el simbolo inicial esta en este set final significa que hay un camino o un arbol que lleva a generar la cadena inicial que se revisó
        if(resultados[tamano-1][0].find(inicial) != resultados[tamano-1][0].end()){
            cout<<"Accepted\n";
        }
        else{
            cout<<"Rejected\n";
        }
    }
	return 0;
}
