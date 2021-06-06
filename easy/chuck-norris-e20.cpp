// CHUCK NORRIS
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <bitset>
using namespace std;
void tounary(string a)
{
    vector<int> vec;
    vector<int> vectype;
    //cout<<a<<endl;
    /*while (a!=0)
    {
        vec.push_back(a%2);
        a=(a-a%2)/2;
    }
    for(int i =0; i < 7-vec.size();i++)
    vec.push_back(0);
    */
    for(int i =0 ;i <a.size();i++)
    {
        bitset<7> b(a[i]);
        vector<int> temp;
        for(int j =0 ; j <7;j++)
        temp.push_back(b[j]);
        reverse(temp.begin(),temp.end());
        for(int k =0 ; k <7;k++)
        vec.push_back(temp[k]);
        temp.clear();
    }
    /*for(int i : vec)
    cout<<i;
    cout<<endl;*/
    
    //reverse(vec.begin(),vec.end());
    
    /*for(int i : vec)
    cout<<i;
    cout<<endl;
    */
    int pre =2;
    for(int i =0;i<vec.size();i++)
    {
        if(vec[i]!=pre)
        {
        vectype.push_back(vec[i]);
        }
        pre=vec[i];
    }
    /*for(int i : vectype)
    cout<<i;
    cout<<endl;
    */
    vector<int> vecnum(vectype.size(),0);
    int k =0;
    for(int i =0 ;i<vec.size();i++)
    {
        int c = 0;
        if(vec[i] == vectype[k])
        vecnum[k]++;
        else
        {
            k++;
            vecnum[k]++;
        }
    }
    /*for(int i : vecnum)
    cout<<i;
    cout<<endl;
    */
    cout<<(vectype[0]==0?"00":"0")<<" ";
    for(int i = 0 ; i < vecnum[0];i++)
    cout<<"0";
    for(int i =1; i<vectype.size();i++)
    {
        cout<<" "<<(vectype[i]==0?"00":"0")<<" ";
        for(int j =0 ; j<vecnum[i];j++)
        cout<<"0";
    }
}

int main()
{
    string m;
    getline(cin, m);
    //cout<<m;
    
    //tounary(m[0]);
    //cout<<endl;
    //tounary(m[1]);
    /*for(int i =0 ; i <m.size();i++)
    {
    
    
    tounary(m[i]);
    cout<<" ";*/
    
    tounary(m);
    

    //cout << "answer" << endl;
}