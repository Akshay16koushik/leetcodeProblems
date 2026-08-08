function intersection(nums1: number[], nums2: number[]): number[] {
    let hashSet = new Set<number>();
    let loopingArray = [];

    if(nums1.length > nums2.length){
        hashSet = new Set(nums1);
        loopingArray = nums2;
    } else {
        hashSet = new Set(nums2);
        loopingArray = nums1;
    }
    let result = new Set<number>();
    loopingArray.forEach((num)=>{
        if(hashSet.has(num)){
            if(!result.has(num)){
                result.add(num);
            }
               
        }
    })
    

    return [...result]
    
};


console.log(intersection([1,2,2,1],[2,2]))