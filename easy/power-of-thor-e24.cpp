// POWER OF THOR - EPISODE 1
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/
int main()
{
    int lightX; // the X position of the light of power
    int lightY; // the Y position of the light of power
    int initialTX; // Thor's starting X position
    int initialTY; // Thor's starting Y position
    cin >> lightX >> lightY >> initialTX >> initialTY; cin.ignore();

    // game loop
    while (1) {
        int remainingTurns; // The remaining amount of turns Thor can move. Do not remove this line.
        cin >> remainingTurns; cin.ignore();

        // Write an action using cout. DON'T FORGET THE "<< endl"
        // To debug: cerr << "Debug messages..." << endl;


        // A single line providing the move to be made: N NE E SE S SW W or NW
        if(initialTX > lightX && initialTY <lightY)   
     {
            cout << "SW" << endl;
            initialTX--;
            initialTY++;
     }
     else if (initialTX<lightX  && initialTY <lightY)
     {
            cout << "SE" << endl;
            initialTX++;
            initialTY++;
     }
        
        
        
         else if(initialTX > lightX && initialTY >lightY)   
     {
            cout << "NW" << endl;
            initialTX--;
            initialTY--;
     }
     else if (initialTX<lightX  && initialTY >lightY)
     {
            cout << "NE" << endl;
            initialTX++;
            initialTY--;
     }
    
     else if(initialTX > lightX)   
     {
            cout << "W" << endl;
            initialTX--;
        
     }
     else if (initialTX<lightX)
     {
            cout << "E" << endl;
            initialTX++;
     }
     
     else if(initialTY > lightY)   
     {
            cout << "N" << endl;
            initialTY--;
     }
     else if (initialTY < lightY)
     {
            cout << "S" << endl;
            initialTY++;
     }
    }
    
}