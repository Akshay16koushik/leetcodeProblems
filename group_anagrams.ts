// function groupAnagrams(strs: string[]): string[][] {

//     let sortedArray: any[] = [];
//     let obj: any = {};
//     for(let i=0;i< strs.length;i++) {
//         const sortedElement = strs[i].split('').sort().join(',');
//         obj[sortedElement] ? obj[sortedElement].push(strs[i]) : obj[sortedElement] = [strs[i]];
//     }
//     const values: any = Object.values(obj);
//     // values.forEach((ele:any)=>{
//     //     let anagramGroup: string[] = []
//     //     ele.forEach((eleIndex: number)=>{
//     //         anagramGroup.push(strs[eleIndex]);
//     //     })
//     //    sortedArray.push(anagramGroup);
//     // })
//     // console.log( obj);
//     return [...values]
// };





function groupAnagrams(strs: string[]): string[][] {
    let anagramMap: any = {};
    for(let i=0;i< strs.length;i++) {
        const sortedElement = strs[i].split('').sort().join(',');
         anagramMap[sortedElement] ? anagramMap[sortedElement].push(strs[i]) : anagramMap[sortedElement] = [strs[i]];
    }
    const groups : any = Object.values(anagramMap);
    return groups
};


const strs = ["eat","tea","tan","ate","nat","bat"]
console.log('RESULT:',groupAnagrams(strs));