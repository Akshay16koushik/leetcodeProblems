function threeSum(nums: number[]): number[][] {
    let result : number[][]= [];
    let sortedNums = nums.sort((a,b)=> a-b);
    for(let i=0;i< nums.length;i++){
        let left =i +1;
        let right = nums.length -1;
        while(left < right){
            let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            if(sum === 0) {
                     result.push([sortedNums[i] , sortedNums[left] , sortedNums[right]]);
                            while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                left++;
            }

            while (left < right && sortedNums[right] === sortedNums[right + 1]) {
                    right--;
            }
                right--;
                left++;
            }
            else if(sum > 0) {
                right--;
            }
            else if(sum < 0){
                left++;
            }
        
        }
    }
    return result ;
};
    // for(let i=0;i<nums.length -2;i++) {
    //     for(let j =i +1;j< nums.length; j++) {
    //         for(let k = j+1; k< nums.length; k++) {{
    //                 let sum = nums[i] + nums[j]+ nums[k];
    //                 if(sum === 0)
    //                     result.push([nums[i],nums[j],nums[k]]);
    //         }}
    //     }
    // }

console.log(threeSum([-1,0,1,2,-1,-4]))