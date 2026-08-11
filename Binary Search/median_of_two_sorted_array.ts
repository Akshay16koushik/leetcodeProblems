/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
*/

// Bellow solution is in O(m+n) complexity .

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let newArray: number[] = [];
    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
    let i = 0;
    let j = 0;
    while(i < nums1Length && j < nums2Length) {
            if(nums1[i] < nums2[j]) {
                newArray.push(nums1[i]);
                i++;
            } else {
                newArray.push(nums2[j]);
                j++;
            }
    }
    if(j < nums2Length) {
        newArray.push(...nums2.slice(j));
    }
    if(i< nums1Length){
        newArray.push(...nums1.slice(i));
    }
    let medain = 0;
    if(newArray.length > 0){
         if(newArray.length %2 === 0) {
        medain =(newArray[Math.round(newArray.length / 2)-1] + newArray[Math.round(newArray.length / 2) ]) / 2;
    } else {
        medain = newArray[Math.round(newArray.length / 2)-1]
    }
    }
   
    return medain;
};