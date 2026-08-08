function longestConsecutive(nums: number[]): number {
    if(nums.length === 0){
        return 0;
    }
   let hashset = new Set(nums);
    let count = 0;
    let current = nums[0];
    let longest = 0;
   for(const num of hashset) {
    if(hashset.has(num-1)){
        // Do nothing
        continue;
    } else {
        current = num;
        count = 0;
        while(hashset.has(current)){
            current ++;
            count++;
        }
        longest = Math.max(longest, count);
    }
   }
   return longest;
};


console.log(longestConsecutive([100,4,200,1,2,3,2]))