#include <iostream>
#include <stdio.h>
#include <cmath>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;


int main(){
    vector<int> evens;
    vector<int> odds;
    vector<int> goodevens;
    vector<int> goododds;
    int n;
    cin>>n;
    int current;
    int evensize=0;
    int oddsize=0;
    for(int i=0; i<n; i++){
        cin>>current;
        if(current%2==0){evens.push_back(current);evensize++;}
        else{odds.push_back(current);oddsize++;}
    }

    vector<int> visited;
    int sum;
    for(int i=0; i<evensize; i++){
        for(int j=i+1; j<evensize; j++){
            sum=evens.at(i)+evens.at(j);
            double logarithm=log2(sum);
            if(logarithm==floor(logarithm)){
                if (!(find(visited.begin(),visited.end(),i) != visited.end())){
                    goodevens.push_back(evens.at(i)); // aqui el problema está en que se repiten
                    visited.push_back(i);
                }
                if (!(find(visited.begin(),visited.end(),j) != visited.end())){
                    goodevens.push_back(evens.at(j)); // aqui el problema está en que se repiten
                    visited.push_back(j);
                }
            }
        }
    }
    visited.clear();

    for(int i=0; i<oddsize; i++){
        for(int j=i+1; j<oddsize; j++){
            sum=odds.at(i)+odds.at(j);
            double logarithm=log2(sum);
            if(logarithm==floor(logarithm)){
                if (!(find(visited.begin(),visited.end(),i) != visited.end())){
                    goododds.push_back(odds.at(i)); // aqui el problema está en que se repiten
                    visited.push_back(i);
                }
                if (!(find(visited.begin(),visited.end(),j) != visited.end())){
                    goododds.push_back(odds.at(j)); // aqui el problema está en que se repiten
                    visited.push_back(j);
                }
            }
        }
    }

    int e=goodevens.size();
    int o=goododds.size();
    cout<<n-(e+o);


}
