// TEMPERATURES
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
int main()
{
    int n; // the number of temperatures to analyse
    
    
    int temp;
    int min;
    cin >> n; cin.ignore();
    int t;
    cin >>t;
    if( t >= -273 && t <= 5526)
    min = t;
    for (int i = 1; i < n; i++) {
        int t; // a temperature expressed as an integer ranging from -273 to 5526
        cin >> t; cin.ignore();
        if( ( t > -273 && t < 5526) &&   (abs(t) < abs(min) || (abs(t)== abs(min) && (t > min))))  min = t; 
    }
    if (t == NULL) cout<<0<<endl;
    cout<<min<<endl;
    // Write an action using cout. DON'T FORGET THE "<< endl"
    // To debug: cerr << "Debug messages..." << endl;
    
    
}