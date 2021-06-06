# THERE IS NO SPOON - EPISODE 1
import sys
import math

# Don't let the machines win. You are humanity's last hope...

width = int(input())  # the number of cells on the X axis
height = int(input())  # the number of cells on the Y axis
arr = []
for i in range(height):
    line = input()  # width characters, each either 0 or .
    line=list(line)
    arr.append(line);
# print(width,height)
# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr, flush=True)

def findRight(arr,ix,iy):
    compare = arr[iy]
    size = len(arr[0])
    for a in range(ix+1,size):
        if compare[a] == '0':
            return a,'0'
    return -1,'.'
def findDown(arr,ix,iy):
    compare = [row[ix] for row in arr]
    size = len(arr)
    for a in range(iy+1,size):
        if arr[a][ix] == '0':
            return a,'0'
    return -1,'.'

for idy in range(len(arr)):
    for idx in range(len(arr[0])):
    # for idx,x in enumerate(y):
        if arr[idy][idx] == '.':
            continue
        re =[str(idx),str(idy)]
        indexright,right = findRight(arr,idx,idy)
        indexbottom,bottom = findDown(arr,idx,idy)
        if right == '0':
            re+=[indexright,idy]
        elif right == '.':
            re +=['-1','-1']
        if bottom == '0':
            re+=[idx,indexbottom]
        elif bottom == '.' :
            re +=['-1','-1']
        print(' '.join([str(x) for x in re]))