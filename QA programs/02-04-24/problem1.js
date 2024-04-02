// Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]



function maxnum(array)
{
    let result=[]
   for(let i=0;i<array.length;i++)
   {
    let count=0
    for(let j=0;j<array.length;j++)
    {
        if(array[i]===array[j])
        {
            count++
        }
    }
    if(count>array.length/2 && !result.includes(array[i]))
    {
        result.push( array[i])
    }
   }return result
    
}

let array1=[3,2,3]
let array2=[2,2,1,1,1,2,2]

console.log(maxnum(array1));//output:3
console.log(maxnum(array2));//output:2



console.log("USING HASHMAP METHOD")

function HashMap(array)
{
    let hashmap={}
    for(let i=0;i<array.length;i++)
    {
        if(!hashmap[array[i]])
        {
            hashmap[array[i]]=1
        }else{
            hashmap[array[i]]+=1
        }
    }

    let result=[]
    for(let key in hashmap)
    {
        if(hashmap[key]>array.length/2)
        {
            result.push(parseInt(key))
        }
    }return result
}


console.log(HashMap(array1));//output:3
console.log(HashMap(array2));//output;2
