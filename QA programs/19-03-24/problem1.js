// Subarray Product Less Than K
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of 
// all the elements in the subarray is strictly less than k.
// Example 1:
// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

let array=[10,5,2,6]
// let K=100
// let productOfArrays=1
// let count=0

// for(let l=0;l<array.length;l++)
// {
//     for(let r=l;r<array.length;r++)
//     {

//         for(let i=l;i<=r;i++)
//         {
//             productOfArrays=productOfArrays*array[i]
            
            
//         }
//         if(productOfArrays<K)
//         {
//             // console.log(productOfArrays);
//             count++

//         }
//     }
    
// }console.log(count);


function product(arr){
    let count=0
    let k=100
    for(let i=0;i<arr.length;i++)
    {
        let product=1
        for(let j=i;j<arr.length;j++)
        {
            product*=array[j]
            if(product<k){
                count++
            }
        }
    }console.log(count); 
}

product(array)




