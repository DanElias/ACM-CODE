
#include <bits/stdc++.h>
using namespace std;
int main()
{
	string s;
	int count=0;
	cin>>s;
	for(int i=0;i<s.size();i++)
	{
		 int find=(s.substr(i)).find("bear");
		 if(find!=-1)
			 count+=1+s.substr(i).size()-find-4;
	}
	cout<<count<<endl;
	return 0;
}
