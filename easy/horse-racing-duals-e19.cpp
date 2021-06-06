// HORSE-RACING DUALS
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
int main()
{
    int N;
    vector<int> a;
    cin >> N; cin.ignore();
    for (int i = 0; i < N; i++) {
        int Pi;
        cin >> Pi; cin.ignore();
        a.push_back(Pi);
    }
    sort(a.begin(),a.end());

    // Write an action using cout. DON'T FORGET THE "<< endl"
    // To debug: cerr << "Debug messages..." << endl;
    int min =999;
     for (int i = 0; i < N-1; i++) {
    int b = a[i+1]-a[i];
    if(min>b)
    min=b;
     }
     cout<<min;
}