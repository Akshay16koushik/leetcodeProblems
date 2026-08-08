// Pattern: Hash Map (value → last seen index)
// Key insight: Replace repeated searches with constant-time lookups


function containsNearbyDuplicate(nums: number[], k: number): boolean {
const hashMap:Record<number,number> = {};
hashMap[nums[0]] = 0;
for(let i =1;i< nums.length; i++) {
    if(nums[i] in hashMap) {
        if((i - hashMap[nums[i]]) <= k){
            return true
        }
    } hashMap[nums[i]] = i;
}
return false;
};


console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));