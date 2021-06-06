// THE RIVER I.
// By ng201
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    long long r1;
    cin >> r1; cin.ignore();
    long long r2;
    cin >> r2; cin.ignore();

    while(r1!=r2)
    {
        if(r1>r2) swap(r1,r2);
        string a(to_string(r1));
        for(int i =0;i<a.size();i++)
        r1+=a[i]-'0';
    }

    cout << r1 << endl;
}