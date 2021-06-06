// GHOST LEGS
// By java_coffee_cup
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
char down(int x, int y, vector<string>vec );
char lr(int x, int y, vector<string>vec ,int right);
char lr(int x, int y, vector<string>vec ,int right)
{
    if(right)
    {
        for(int i=0;i<vec[x].size();i++)
        {
            y++;
            if(vec[x][y]== '|')
            return down(x,y,vec);
        }
    }
    else
    {
        for(int i=0;i<vec[x].size();i++)
        {
            y--;
            if(vec[x][y]== '|')
            return down(x,y,vec);
        }
    }
}
char down(int x, int y, vector<string>vec )
{
    for(int i = x; i<vec.size();i++)
    {
        x++;
        if(y<vec[x].size() && vec[x][y+1]=='-')
        return lr(x,y+1,vec,1);
        if(y>0 && vec[x][y-1]=='-')
        return lr(x,y-1,vec,0);
        if(!isspace(vec[x][y])&& vec[x][y]!='|')
        return vec[x][y];
    }
}
int main()
{
    int W;
    int H;
    vector<string> vec;
    cin >> W >> H; cin.ignore();
    //cout<<W<<" "<<H<<endl;
    for (int i = 0; i < H; i++) {
        string line;
        getline(cin, line);
        vec.push_back(line);
        //cout<<line<<endl;
    }

    // Write an action using cout. DON'T FORGET THE "<< endl"
    // To debug: cerr << "Debug messages..." << endl;
    for(int i =0; i <W;i++)
    if(!isspace(vec[0][i]))
    cout <<vec[0][i]<<down(0,i,vec) << endl;
}