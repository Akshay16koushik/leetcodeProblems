function firstMissingPositive(nums: number[]): number {

    const numsCount = nums.length;
    let i =0;
    while(i< nums.length){
        if(nums[i] === i+1){
            // move on
            i++;
        }
        else if(i+1 === nums[i]){
            i++;
        }
        else if(nums[i] === nums[nums[i]-1]){
            i++;
        } else if(nums[i] >= 1 && nums[i]<= numsCount){
               let temp = nums[i];
                    nums[i] = nums[temp-1];
                    nums[temp -1] = temp;
        } else {
            i++;
        }
    }
    for(let j= 0;j< nums.length+1;j++){
       if(j+1 != nums[j]){
        return j+1;
       }
    }

    return numsCount +1;
    
};


console.log(firstMissingPositive([3,4,-1,1]))