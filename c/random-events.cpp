#include <iostream>
#include <cstdio>
using namespace std;

int n, m, r;
int arr[100007], nums[100007];
double probabilites[100007], p;

void calc_prob () {
	double ans;
	int x;

	// get n and m
	scanf("%d%d",&n,&m);

	// scan de array
	for(int i = 1; i <= n; i++) {
		scanf("%d", &arr[i]);
	}

	// get r and p. m is num of experiments
	for(int i=1;i<=m;i++) {
		scanf("%d%lf",&r,&p);
		nums[i] = r;
		probabilites[i] = p;
	}

	// Find from the back to the front of arr, the first position with an
	// unordered num
	int j = n;
	for(j; j > 0; j--){
		if(arr[j] != j){
			break;
		}
	}

	// If all the arr is sorted then we have a probability of 1
	if(j == 0) {
		printf("%lf\n",1.0);
		return;
	} else {
		double p_not = 1.0;
		for(int i = 1; i <= m; i++) {
			// we only chose the experiments which are greater or equal to
			// the first position with already sorted nums
			// If its less then theres just no way we can sort the arr
			if(nums[i] >= j) {
				// probability is given by 
				// The multiplication of all probabilities of not being able
				// to sort, of only the valid experiments
				p_not *= (1.0 - 1.0 * probabilites[i]);
			}
		}
		// The p_not has the probability of not being sorted in the end
		// so we just subtract 1 - p_not
		printf("%lf\n", 1.0-p_not);
	}
}

int main()
{
	int n = 1;
	scanf("%d",&n);
	while(n > 0) {
		calc_prob();
		n--;
	}
	return 0;
}