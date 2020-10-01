/*
    Author: Dan Elias
    Problem: 1011 A Stages Codeforces
    Date: 25/02/2019
*/

#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int, int> ii;
typedef vector<int> vi;
typedef vector<ii> vii;
typedef vector<vi> vvi;


int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string nums;
    vi v(6);
    int aux;
    for(int i=0;i<6;i++){
        cin>>aux;
        v[i]=aux;
    }
    int sum=accumulate(v.begin(), v.end(), 0),half=sum/2, res;
    bool flag=false;
    if(sum%2!=0){cout<<"NO";return 0;}
    else{
        for(int i=0; i<4 && !flag; i++){
            for(int j=i+1; j<5 && !flag; j++){
                for(int k=j+1; k<6 && !flag; k++){
                    res=v[i]+v[j]+v[k];
                    if(res==half){
                        cout<<"YES";
                        flag=true;
                        return 0;
                    }
                }
            }
        }
    }
    cout<<"NO";

}
