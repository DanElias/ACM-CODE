#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main(){

    int friends[100];

    int n;
    int giver;

    std::cin>>n;

    for(int i=1; i<=n; i++){
        std::cin>>giver;
        friends[giver-1]=i;
    }

   for(int i=0; i<n; i++){
        std::cout<<friends[i];
        std::cout<<" ";
    }


}
