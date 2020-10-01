#include <iostream>
#include <stdio.h>
using namespace std;

int main(){
    long long int n,m;
    cin>>n;cin>>m;
    long long int i=n-m+1;
    long long int maxnum=(i)*(i-1)/2;
    long long int minnum=0;
    long long int aux=n;
    while(aux-m>0){aux=aux-m;minnum=minnum+aux;}
    cout<<minnum<<" "<<maxnum;
}
