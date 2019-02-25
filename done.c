#include<stdio.h>
#include<stdlib.h>
#include<ctype.h>
#include<string.h>


int main(){

    int m=0;
    int n=0;
    int count=0;
    int i=0;
    int j=0;
    int acum=0;
    int checks=0;

    scanf("%i", &n);
    scanf("%i", &m);


    char *matrix = (char *)calloc((n*m), (n*m*sizeof(char)));
    double *matrixcheck = (double*)calloc((n*m), (n*m*sizeof(double)));


    //printf("%i", m);
    //printf("%i", n);

    //char matrix[n][m]; // la matriz que va a tener los renglones dados // m= columnas n= renglones
    //int matrixcheck[n][m];// matriz con la que se va a comparar la matriz original

    // se obtiene cada renglón de la matriz input
    //char renglon[m+1]; // recordar el /0

    int auxm= m+1;
    int auxn= n+1;

    char *renglon = (char *)calloc((auxm),(auxn)* sizeof(char));


    for(i=0; i<n; i++){ // se va cambiando de renglón
        fflush(stdin);
        gets(renglon);
        //puts(renglon);

        for(j=0; j<m; j++){ // se va cambiando de columna para copiar todo el renglón a la matriz.
            //*matrix[i][j]=renglon[j]; // se asigna a la matriz el caracter en la posición j de la cadena en el renglón i
            *(matrix + i*n + j) = *(renglon+ j);
        }
    }

    /*for(i=0; i<n; i++){
        for(j=0; j<m; j++){ // comprobación de que se copiaron los renglones a la matriz
            //printf("%c",matrix[i][j]);
            printf("%c ", *(matrix + i*n + j));
        }
        printf("\n");
    }*/
    //


/////////////////////////////////////// recorrer matriz
    for(i=0; i<n; i++){ // se va llenando la matriz matrixcheck con ayuda de la matriz matrix dada pero se va llenando de manera lógicmanete correcta.
        acum=0;
        for(j=0; j<m; j++){

            if((*(matrix + i*n + j))=='*'){

                //*((int*)matrixcheck + i*n + j)=10; ////checar el cast para asignar el valor

            }
            else
            {

                if((*(matrix + (i*n) + j))=='.'){
                    printf("hola\n");
                    //*((double*)matrixcheck + i*n + j)=7;
                    //*(double*)matrixcheck=7;
                    //*((int*)matrixcheck + (i*n) + j )=7;
                    *matrixcheck + (i*n + j)=7;

                }

                    if(((i-1)>=0)&&((j-1)>=0)){
                    int auxi=i-1;
                    int auxj=j-1;
                    if(*(matrix + auxi*n + auxj)=='*')
                    {
                        if(0<i-1<n){
                            acum=acum+1;
                        }
                        else
                        {
                            if(0<j-1<m){
                                acum=acum+1;
                            }
                        }
                    }
                    }

                if((i-1)>=0){
                int auxi=i-1;
                int auxj=j;
                if(*(matrix + auxi*n + auxj)=='*'){
                     if(0<i-1<n){
                        acum=acum+1;
                    }
                }
                }

                if(((i-1)>=0)&&((j+1)<m)){
                int auxi=i-1;
                int auxj=j+1;
                if(*(matrix + auxi*n + auxj)=='*'){
                   if(0<i-1<n){
                        acum=acum+1;
                    }
                    else{
                        if(0<j+1<m){
                        acum=acum+1;
                        }
                    }
                }
                }

                if((j-1)>=0){
                int auxi=i;
                int auxj=j-1;
                if(*(matrix + auxi*n + auxj)=='*'){
                    if(0<(j-1)<m){
                        acum=acum+1;
                    }
                }
                }

                if((j+1)<m){
                int auxi=i;
                int auxj=j+1;
                if(*(matrix + auxi*n + auxj)=='*'){
                    if(0<j+1<m){
                        acum=acum+1;
                    }
                }
                }
/////////////////////////////////////////////////////////////

                if(((i+1)<n)&&((j-1)>=0)){
                int auxi=i+1;
                int auxj=j-1;
                if(*(matrix + auxi*n + auxj)=='*'){
                  if(0<j-1<m){
                        acum=acum+1;
                    }
                }
                }
//////////////////////////////////////////////////////////////
                if((i+1)<n){
                int auxi=i+1;
                int auxj=j;
                if(*(matrix + auxi*n + auxj)=='*'){
                   if(0<i+1<n){
                        acum=acum+1;
                    }
                }
                }

                if(((i+1)<n)&&((j+1)<m)){
                int auxi=i+1;
                int auxj=j+1;
                if(*(matrix + auxi*n + auxj)=='*'){
                    if(0<i+1<n){
                        acum=acum+1;
                    }
                    else{
                        if(0<j+1<m){
                        acum=acum+1;
                        }
                    }
                }
                }

                //*((int*)matrixcheck + i*n + j)=acum;
                    //matrixcheck[i*n + j]=acum;
                acum=0;
            }
        acum=0;
        }
    acum=0;
    }

    for(i=0; i<n; i++){ // ciclos que transforman los puntos o espacios vacíos en 0´s
        for(j=0; j<m; j++){
            //matrixcheck[i][j]=matrix[i][j];

            if(*(matrixcheck + i*n + j)==10){
                *(matrixcheck + i*n + j)='*';

            }

            if(*(matrixcheck + i*n + j)==0){
                *(matrixcheck + i*n + j)=46; //CHECAR

            }
        }
    }


    for(i=0; i<n; i++){
        for(j=0; j<m; j++){ // comprobación de que se copiaron los renglones a la matriz
            if((*(matrixcheck + i*n + j)==42) || *(matrixcheck + i*n + j)==46)
            {
                printf("%i", *(matrixcheck + i*n + j));
            }
            else{
                printf("%i", *(matrixcheck + i*n + j));
            }
        }
        printf("\n");
    }


    for(i=0; i<n; i++){
        for(j=0;j<m;j++){
            if(*(matrixcheck + i*n + j)==10)
            {
                if(*(matrix + i*n + j) != '*'){
                    checks=1;
                }
            }
            else
            {
                char datomatrix = *(matrix+ i*n + j);
                double numeromatrix= (double) *(matrix + i*n + j);
                if(numeromatrix==42)
                {
                    double numero= *(matrixcheck + i*n + j);
                    //printf("\n%i",numero);
                    char dato= (char) numero;
                    //printf("%c",dato);
                    if(dato != *(matrix + i*n + j)){
                    checks=1;
                    }
                }
                else
                {
                    //printf("\nwoops");
                    double aux = *(matrixcheck + i*n + j)+48;
                    char auxc= (char) aux;
                    //matrix[i][j]=matrix[i][j]+48;
                    if(auxc!= *(matrix + i*n + j))
                    {
                        checks=1;
                    }
                }
            }
        }
    }

    if(checks==1){
        printf("NO");
    }
    else{
        printf("YES");
    }

   // free(matrix);
    //matrix=NULL;
    //free(matrixcheck);
   // matrixcheck=NULL;

     //printf("\nn");

}

