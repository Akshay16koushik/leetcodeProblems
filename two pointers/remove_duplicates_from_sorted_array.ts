function removeDuplicates(nums: number[]): number {
    let k = 1;
    let left = 0;
    let right =1;
    while(right < nums.length ){
        if(nums[left] !== nums[right]){
           nums[k] = nums[right];
            k++;
            left++;
        }
        right++;
    }
    console.log(nums);
    return k;
    
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));