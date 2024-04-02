// Finding the Maximum - Develop a recursive function to find the maximum number in an array.

let array=[1,2,5,6,8,1]

function maxnumber(arr)
{
    let max=arr[0]
    for(let i=0;i<=arr.length;i++)
    { 

       if(arr[i]>max)
       {
         max=arr[i]
       }
    }console.log(max);
}

maxnumber(array)



function maximumnum(arr)
{
   
    
    
    
    if(max>arr.length-1)
    {
        return max
    }

    
}
console.log(maximumnum(array));


// Reversing a String - Implement a recursive function to reverse a string using recursion