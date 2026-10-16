function twoSum(numbers: number[], target: number): number[] {
let left = 0;
let right = numbers.length -1;
    while(true) {
        let sum = numbers[left] + numbers[right];
        if(sum > target){
            right--;
        }
        else if(sum < target){
            left++;
        }
        else if(sum === target){
            return [left+1, right+1];
        }

    }
};

console.log(twoSum( [-3,-2,-1,0], -1));