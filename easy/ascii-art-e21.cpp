// ASCII ART
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
int pos(int a, int b)
{
    
    if (isupper((char)a))
    return (a-'A')*b;
    else if (islower((char)a))
    return (a-'a')*b;
    else
    return ('z'-'a'+1)*b;
}
int main()
{
    int L;
    cin >> L; cin.ignore();
    int H;
    cin >> H; cin.ignore();
    string T;
    getline(cin, T);
    vector<string> str;
    int b;
    for (int i = 0; i < H; i++) {
        string ROW;
        getline(cin, ROW);
        //ROW+=' ';
        str.push_back(ROW);
        //cout<<ROW<<endl;
        b=ROW.size()/27;
    }
    //cout<<endl<<T<<endl;
    //for(int i =0 ;i<T.size();i++)
    //cout<<(int)T[i]<<" ";
    //cout<<endl;
    //T = "abcdefghijklmnopqrstuvwxyz1";
    for(int  m =0 ; m<H;m++)
    {
    for(int k =0 ;k <T.size();k++)
    {
        //if(isalpha(T[k])) T[k]='z'+1;
        int posi = pos((int)T[k],b);
        //cout<<posi<<"- ";
        for(int i = posi;i<posi+b;i++)
        {
            cout<<str[m][i];
        }
        
    }
    cout<<endl;
        
    }
        
    //cout << L<<" "<<H << endl;
}