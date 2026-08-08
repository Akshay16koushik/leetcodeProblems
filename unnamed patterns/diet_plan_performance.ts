function dietPlanPerformance(calories: number[], k: number, lower: number, upper: number): number {
    const hashMap:Record<number,number> = {};
    for(let i=0;i< calories.length;i++) {
        hashMap[i] = calories[i];
        console.log(calories[i])
    }
    console.log(hashMap)
    return -1
};


console.log(dietPlanPerformance([1,2,3,4,5],2,3,3));