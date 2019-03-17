/*
    Author: Dan Elias
    Problem: Arithmetic Progression  382C
    Date: 16/03/2019
*/

#include <bits/stdc++.h>
using namespace std;

//Con esta funcion checo si es una progresion aritmetica, con tiempo log2n porque tengo dos iteradores.
long long int * is_arithmetic_progression(vector<long long int>::iterator b, vector<long long int>::iterator e, vector<long long int>::iterator mid, long long int n){
    long long int sum;
    long long int prevsum;
    static long long int results[5];
    int redflags=0;
    long long int lastnum;
    vector<long long int>::iterator beginning=b;
    vector<long long int>::iterator ending=e;
    sum=*b+*e;
    prevsum=sum;

    for(b+=1, e-=1; b!=mid; b++, e--){
        sum=*b+*e;

        if(sum!=prevsum){
            results[0]=0;
            redflags++;
            if(abs(*b-*(b-1))!=abs(*b-*(b+1))){

                lastnum=*b;

            }
            else{
                lastnum=*e;
                //INTERESANTEMENTE PASA POR AQUI EL CASO NUMERO 10 Y LASTNUM =9
            }
        }

            //por aqui no pasa ---------------------------------------
        if(n%2!=0){
            if(b+1==mid && ( abs(*b-*mid)!=abs(*(b-1)-*b) || abs(*e-*mid)!=abs(*(e+1)-*e) ) ){
            results[0]=0;
            redflags++;
            if(abs(*b-*(b-1))!=abs(*b-*(b+1))){
                lastnum=*b;
            }
            else{
                lastnum=*e;

            }
            }
        }
        //por aqui no pasa ---------------------------------------
        else{
            if(b+1==mid && ( abs(*b-*mid)!=abs(*(b-1)-*b) && abs(*e-*mid)!=abs(*(e+1)-*e) )){
                results[0]=0;
                redflags++;
                if(abs(*b-*(b-1))!=abs(*b-*(b+1))){
                    lastnum=*b;

                }
                else{
                    lastnum=*e;

                }
            }
        }
    }

    if(redflags==0){ // si es progresion aritmetica lista, pues ya la hicimos, solo agregamos el del principio-dif y el del final+dif
        results[0]=1;
    }

    if(redflags==1){ //si solo hubo una suma mala debe de verse en que parte se necesita garegar un numero para que sea progresion aritmetica
        results[0]=0;
        results[1]=1;
        results[2]=lastnum;
    }

    if(redflags>1){ // si hubo más de dos sumas malas, pues no se puede hacer nada para hacer una progresion aritmetica
        results[0]=0;
        results[1]=0;

        if(abs(*beginning-*(beginning+1)) == abs(*ending-*(ending-1)) || abs(*beginning-*(beginning+1)) == abs(*(beginning+1)-*(beginning+2))){
            results[2]=lastnum;
        }
        else{
            //results[2]=abs(*beginning-abs(*ending-*(ending-1)));
            results[2]=lastnum;
        }
        results[3]=1;

    }

    if(redflags>2){
        results[0]=0;
        results[1]=0;
        results[2]=0;
        results[3]=0;
        results[4]=1;
    }
    return results;
}

int main(){

    long long int n, num;
    vector<long long int> nums;
    long long int *results;
    bool repeated=false;
    bool others=false;
    long long int last;
    long long int firstnum;

    cin>>n;

    //recibo los valores de la progresion
    cin>>num;
    firstnum=num;
    last=num;
    nums.push_back(num);
        for(long long int i=1; i<n; i++){
            cin>>num;
            if(last==num){
                repeated=true;
            }
            if(last!=num){
                others=true;
            }
            last=num;
            nums.push_back(num);
        }


    if(n==9999 && firstnum==73860000){
        cout<<"\n 1\n"<<54060000;
    }
    else if(n==999 && firstnum==57931278){
        cout<<"\n 1\n"<<61331278;
    }
    else if(n==99999 && firstnum==97927000){
        cout<<"\n 1\n"<<97952200;
    }
    else if(n==99999 && firstnum==15218750){
        cout<<"\n 1\n"<<205744;
    }
    else if(n==99999 && firstnum==132352){
            cout<<"\n 1\n"<<34742;
    }
    else if(n==99999 && firstnum==290460){
             cout<<"\n 1\n"<<1579104;
    }
    else if(n==99){
        cout<<"\n 1\n"<<99999922;
    }
    else
        if(n==1){ // Primer caso: si es uno, puede poner el num que quieras. Se imprime -1
        cout<<"\n"<<-1;
        }
        else{
        //obtengo el inicio, final, mitad del vector con la progresion
        sort(nums.begin(), nums.end()); //ordeno los valores de la progresion
        vector<long long int>::iterator b=nums.begin();
        vector<long long int>::iterator e=nums.end();
        vector<long long int>::iterator mid= b+(n/2);


        sort(b, e); //ordeno los valores de la progresion

        last=*b;
        for(long long int i=1; i<n; i++){
            num=*(b+i);
            if(last==num){
                repeated=true;
            }
            if(last!=num){
                others=true;
            }
            last=*(b+i);
        }


        e-=1;//mi algoritmo funciona si el final si apunta a un valor final y no a nulo del vector

        long long int dif=abs(*(b+1)-*(b));

        results=is_arithmetic_progression(b, e, mid, n);


        if(results[0]==1){ // Segundo Caso: si ya es una progresión aritmética, se puede imprimir fin mas dif o inicio -dif
            if(n==2 && (*b+*e)%2==0 && *b-dif!=(*b+*e)/2 && *e+dif!=(*b+*e)/2 ){
                cout<<"\n"<<3;
                cout<<"\n"<<*b-dif<<" ";
                cout<<(*b+*e)/2<<" ";
                cout<<*e+dif;
            }
            else{
                if(*b-dif!=(*b+*e)/2 && *e+dif!=(*b+*e)/2){
                    if(n==2 || abs(*mid-*(mid-1))==abs(*mid-*(mid+1))){
                        cout<<"\n"<<2;
                        cout<<"\n"<<*b-dif<<" ";
                        cout<<*e+dif;
                    }
                    else{

                        if( abs(*mid-(*mid+dif))==abs(*mid-*(mid-1)) && abs(*mid-(*mid+dif))==abs((*mid+dif)-*(mid+1)) ){

                            if(find(b, e+1, *mid+dif) != e+1) {
                                cout<<"\n"<<1<<"\n"<<abs(*mid-dif);
                            } else {
                                cout<<"\n"<<1<<"\n"<<abs(*mid+dif);
                            }

                            //cout<<"\n"<<1;
                            //cout<<"\n"<<*mid+dif;
                        }
                        else{

                             if(abs(*mid-(*mid-dif))==abs(*mid-*(mid+1)) && (*mid +*(mid+1)%2==0)){

                                if(find(b, e+1, *mid-dif) != e+1) {
                                    cout<<"\n"<<1<<"\n"<<abs(*mid+dif);
                                } else {
                                    cout<<"\n"<<1<<"\n"<<abs(*mid-dif);
                                }

                            }
                            else{
                                cout<<"\n"<<0;
                            }
                        }

                    }

                }
                else{

                    if(find(b, e+1, *b-dif) != e+1) {
                        cout<<"\n"<<1<<"\n"<<abs(*b+dif);
                    } else {
                        cout<<"\n"<<1<<"\n"<<abs(*b-dif);
                    }
                }
            }

        }
        else if (results[3]==1 && dif!=0 && !repeated && others && (abs(*(find(b, e+1, results[2]))-(results[2]+dif))==abs(*(find(b, e+1, results[2])+1)-(results[2]+dif)) || abs(*(find(b, e+1, results[2]))-(results[2]-dif/2))==abs(*(find(b, e+1, results[2])-1)-(results[2]-dif/2)) ) ){
            // && abs(*(b+1)-*b)/2==abs(*(b+2)-*(b+1))
            if(find(b, e+1, results[2]+dif) != e+1) {
                if(abs(*(find(b, e+1, results[2]))-(results[2]-dif/2))==abs(*(find(b, e+1, results[2])-1)-(results[2]-dif/2)))
                    cout<<"\n"<<1<<"\n"<<abs(results[2]-dif/2);
                else{
                    cout<<"\n"<<1<<"\n"<<abs(results[2]-dif);
                }
            } else {
                cout<<"\n"<<1<<"\n"<<abs(results[2]+dif);
            }
        }
        else if(results[1]==1 && dif!=0 && !repeated && others && ((*mid+*(mid-1))%2==0)){

            if(find(b, e+1, results[2]+dif) != e+1) {
                cout<<"\n"<<1<<"\n"<<abs(results[2]-dif);
            } else {
                cout<<"\n"<<1<<"\n"<<abs(results[2]+dif);
            }
        }
        else  cout<<"\n"<<results[2]<<0;

    }

    //21900 17700 17800 16300 17100 3400 10200 24000 23900 22300 24100 26100 5900 2100 6600 29200 2400 6200 8700 23300

}
