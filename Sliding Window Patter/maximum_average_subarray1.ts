function findMaxAverage(nums: number[], k: number): number {
    let right =0;
    let sum = Number.NEGATIVE_INFINITY;
    let currentSum =0
    while(right < nums.length) {

        if(right < k){
            currentSum += nums[right];
        } else {
            currentSum = currentSum - nums[right -k] + nums[right];
        }
        if(currentSum > sum && right >= k-1) {
            sum = currentSum;
        }
        right++

    }
    return sum/k;   
};

console.log(findMaxAverage([10],1));

console.log(Number.MIN_SAFE_INTEGER)


// Algorithm
/*
Step 1: set left and right to 0 and set sum to 0 let window be empty array
Step 2: traverse through loop
Step 3: Push the element into winow before that check if window has the K elements in it 
    If we Don't have 
        Add that element value to sum 
    If we have 
    Then first remove the first element in winow and subtact that value from sum and add the new value to it and inster into winodow
    increment left.
Step 4: check previous average is less than new average if yes replace it with new , if not keep same 
Step 5: Increment right 
Step 6: repeat same till right becomes more than lenght of array




*/
