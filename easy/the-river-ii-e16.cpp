
// THE RIVER II.
// By ng201
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int sum(int n)
{
    int a =0;
    while(n!=0)
    {
        a +=n%10;
        n/=10;
    }
    return a;
}
int main()
{
    int r1;
    int flag =0;
    cin >> r1; cin.ignore();
    
    string a (to_string(r1));
    for(int i =1; i <a.size()*9;i++)
    {
        int temp = r1 -i;
        //cout<<temp<<" ** "<<i<<"---"<<sum(temp)<<endl;
        if(sum(temp)==i)
        {
            flag=1;
          //  cout<<"YES";
            break;
        }
    }
 
    cout << (flag==1?"YES":"NO") ;
}