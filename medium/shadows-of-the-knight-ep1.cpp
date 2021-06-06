// SHADOWS OF THE KNIGHT - EPISODE 1
#include < iostream >
#include < string >
#include < vector >
#include < algorithm >

    using namespace std;

int main()
{
    int W; // width of the building.
    int H; // height of the building.
    cin >> W >> H; cin.ignore();
    int N; // maximum number of turns before game over.
    cin >> N; cin.ignore();
    int midx;
    int midy;
    cin >> midx >> midy; cin.ignore();
    int xa, ya, xb, yb;
    xa = ya = 0;
    xb = W - 1;
    yb = H - 1;
    //int midx,midy;
    // game loop

    //midx=X0;
    //midy=Y0;
    /*
    midx=xa+(xb-xa)/2;
    midy=ya+(yb-ya)/2;*/

    while (1) {
        string b; // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        cin >> b; cin.ignore();


        //if(xb>xa&&yb>ya) break;

        if ((b.compare("U") == 0) || (b.compare("UR") == 0) || (b.compare("UL") == 0)) {
            yb = midy - 1;
        }
        if ((b.compare("D") == 0) || (b.compare("DR") == 0) || (b.compare("DL") == 0)) {
            ya = midy + 1;
        }
        //L
        if ((b.compare("L") == 0) || (b.compare("UL") == 0) || (b.compare("DL") == 0)) {
            xb = midx - 1;
        }
        //R
        if ((b.compare("R") == 0) || (b.compare("UR") == 0) || (b.compare("DR") == 0)) {
            xa = midx + 1;
        }
        midx = xa + (xb - xa) / 2;
        midy = ya + (yb - ya) / 2;
        // the location of the next window Batman should jump to.
        cout << midx << " " << midy << endl;
    }
}