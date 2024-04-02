// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function trueOrFalse(array)
{
    
    for(i=0;i<array.length;i++)
    {
        let duplicatedvalue=[]
        if(duplicatedvalue.includes(array[i]))
        {
            continue
        }
        for(j=i+1;j<array.length;j++)
        {
            if(array[i]==array[j])
            {
                duplicatedvalue.push(array[i])
                console.log("True");
                break
            }else{
                console.log("false");
                break
            }
        }break
        
    }
}


let array=[1,2,3,4]

let hashMap={}
// console.log(hashMap);

for(let i=0;i<array.length;i++)
{
    if(!hashMap[array[i]])
    {
        hashMap[array[i]]=1
    }else
    {
        hashMap[array[i]]+=1
    }
}
console.log(hashMap);

for(let key in hashMap)
{
    if(hashMap[key]>1)
    {
        console.log("true")
        break
    }
    else{
        console.log("false")
        break
    }
}
