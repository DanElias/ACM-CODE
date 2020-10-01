/*
    Author: Dan Elias
    Problem: 1011 A Stages Codeforces
    Date: 25/02/2019
*/

#include <bits/stdc++.h>

using namespace std;
int main(){
    int n, k;
    cin>>n>>k;
    string stages;
    cin>>stages;
    sort(stages.begin(), stages.end());
    vector<int> visited;
    visited.push_back(-1);
    int j=1, weight=0, cont=0, i=0;
    vector<int>::iterator first,last;
    if(k==1)cout<<stages[i]-96;
    else{
        while(i<n && cont!=k && j<n){
            if(abs(stages[j]-stages[i])>=2){
                    last=visited.end();first=visited.begin(); // sería más óptimo sólo eliminarlos
                    if(!(find(first, last, i)!= last)){weight=weight+(stages[i]-96);visited.push_back(i);cont++;}
                    if(!(find(first, last, j)!= last)){weight=weight+(stages[j]-96);visited.push_back(j);cont++;}
                    i=j;j=i+1;
            }
            else j++;
        }
        if(cont<k)cout<<-1;
        else cout<<weight;
    }
}
