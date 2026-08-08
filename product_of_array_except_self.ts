function productExceptSelf(nums: number[]): number[] {
   let result: number[] = [];
   let i =0;
   let j = nums.length -1;
   let sufix = 1;
   let prefix = 1;
   while(i < nums.length) {
    result[i] = prefix;
    prefix *= nums[i];
    i++;
   }
   while(j>= 0) {
    result[j]  = result[j] * sufix;
    sufix *= nums[j];
    j--;
   }
    return result;
};


console.log(productExceptSelf([1,2,3,4]));


// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
//Firt number is product of 2*3*4 = 24
// second Number is 3*4 = 12
// Third Number is 4*2 = 8
//Fourth Number is 3 * 2 = 6