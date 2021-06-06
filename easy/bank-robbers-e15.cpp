// BANK ROBBERS
// By Shotokan
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

 int minarr(int arr[],int n)
 {
     int min = arr[0];
     int index =0;
     for(int i =0;i <n;i++)
     if(arr[i]<min)
     {
         min=arr[i];
         index=i;
     }
     return index;
 }
 int max(int arr[],int n)
 {
     int max =0;
     for(int i =0;i<n;i++)
     if(arr[i]>max)
     max =arr[i];
     return max;
 }
int main()
{
    int R;
    cin >> R; cin.ignore();
    int V;
    cin >> V; cin.ignore();
    int arr[R] ={0};
    for (int i = 0; i < V; i++) {
        int C;
        int N;
        cin >> C >> N; cin.ignore();
        int a = pow(5,C-N)*pow(10,N);
        int index = minarr(arr,R);
        arr[index]+=a;
    }
    cout<<max(arr,R);
}