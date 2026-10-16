function moveZeroes(nums: number[]): void {
    let left = 0;
    let right = 1;

    while(right < nums.length){

        if(nums[left] === 0 && nums[right] === 0) {
            right++
        }else if(nums[left] === 0 && nums[right] !== 0){
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
            right++;
        }
        else if(nums[left] !== 0 && nums[right]=== 0) {
            console.log('comming to else ', nums[left], nums[right], left, right)
            right++;
            left++;
        }

    }
    console.log('TEST', nums);
};


console.log(moveZeroes([1,0,1]))