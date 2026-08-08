function isGood(nums: number[]): boolean {
const n = nums.length -1;
let value = 0;
let count = 2;
let uniqueElements: any ={};
for(let i= 0; i< nums.length;i++) {
    if(nums[i] < 1) {
        return false;
    }
    if(nums[i] > n) {
        return  false
    }
    if(nums[i] == n) {
            count--;
            continue;

    }
   if(nums[i] < n){
        if(uniqueElements[nums[i]]) {
            return false
        } else {
                uniqueElements[nums[i]] = 1;
                value++;
        }
    }

}
if(count  > 0) {
    return false
}
if(count === 0 && value == n -1) {
    return true;
}

return true;
    
};

console.log(isGood([1, 4, 2, 2, 5, 5]));