#include<bits/stdc++.h>
using namespace std;
int main(){
    int r;
    int c;
    cin>>r>>c;
    int count = 1;
    for(int i =0;i<r;i++){
        for(int j =  0;j<=i;j++){
            cout<<count<<" ";
            count+=1;
        }
        cout<<endl;
    }
    return 0;
}