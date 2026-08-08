// O(n) 


// function containsDuplicate(nums: number[]): boolean {
//     let numObj: any = {};
//     let result: boolean = false;
//     for(let i=0;i< nums.length; i++) {
//         numObj[nums[i]] ? result = true : numObj[nums[i]] = 1;
//     }
//     return result;
// };


// function containsDuplicate(nums: number[]) : boolean {
//     const seen = new Set();
//     seen.size
//     for(let i =0;i < nums.length ; i++) {
//         if(seen.has(nums[i])) return true;
//         else seen.add(nums[i]);
//     }
//     return false;
// }


function containsDuplicate(nums: number[]) : boolean {
 const unique = new Set(nums);
 if(nums.length === unique.size)
   return false 
 return true
}