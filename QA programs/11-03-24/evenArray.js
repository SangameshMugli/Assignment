// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

let array=[1,5,3,20,9,18,24]
let evenArray=[]
let index=0
function even(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
        //    evenArray.push(arr[i])
        console.log(arr[i]);
            evenArray[index]=arr[i]
            index++
            
        }
    
    }
    console.log(evenArray);
}

even(array)






