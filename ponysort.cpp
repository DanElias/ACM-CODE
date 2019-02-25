#include <iostream>
#include <cstdlib>
#include <time.h>

using namespace std;

int main(int argc, char const *argv[]){
    int n;
    int arr[100002];
    int count_moves=0;
    int flag=0;
    int flag2=0;

    std::cin>>n;

    for(int i=0; i<n; i++){
        std::cin>>arr[i];
    }

    for(int i=0; i<n; i++){

        if(i!=0 && i!=n-1){
            if(arr[i-1]<arr[i]&&arr[i]<arr[i+1]&&arr[i-1]<arr[i+1]){
                std::cout<<-1;
                 std::cout<<"hola1";
                flag=1;
                break;
            }

            if(arr[i-1]>arr[i]&&arr[i]>arr[i+1]&&arr[i-1]<arr[i+1]){
                std::cout<<-1;
                std::cout<<"hola2";
                flag=1;
                break;
            }
        }

       if(i==n-1 && n>2){
            if(arr[i-1]<arr[i]&&arr[0]<arr[i]){
                std::cout<<-1;
                std::cout<<"hola3";
                flag=1;
                break;
            }

            if(arr[i-1]>arr[i]&&arr[i-1]>=arr[0]){
                std::cout<<-1;
                std::cout<<"hola4";
                flag=1;
                break;
            }

            if(arr[i-1]<arr[i]&&arr[i]>arr[0]&&arr[i-1]<arr[0]){
                std::cout<<-1;
                std::cout<<"hola5";
                flag=1;
                break;
            }

            if(arr[i-1]>arr[i]&&arr[i]<arr[0]&&arr[i-1]<arr[0]){
                std::cout<<-1;
                std::cout<<"hola6";
                flag=1;
                break;
            }
        }

        if(i==0 && n>2){
            if(arr[n-1]<arr[i]&&arr[i]>arr[i+1]&&arr[n-1]<=arr[i+1]){
                std::cout<<-1;
                flag=1;
                break;
            }

            if(arr[n-1]>arr[i]&&arr[i]<arr[i+1]&&arr[n-1]<=arr[i+1]){
                std::cout<<-1;
                flag=1;
                break;
            }
        }

        if(arr[i]>arr[i+1]){
            if(flag2==0){
                count_moves=count_moves+(n-1-i);
                flag2=1;
            }
        }
    }


    if(flag==0){
        std::cout<<count_moves;
    }

    return 0;
}
