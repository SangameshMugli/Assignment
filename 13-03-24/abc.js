
// Count even and odd digits in an Integer
// A certain number is given and the task is to count even digits and odd digits of the number and 
// also even digits are present even a number of times and, similarly, for odd numbers. 

// Input : 22233
// Output : NO
//          count_even_digits = 3
//          count_odd_digits = 2
//          In this number even digits occur odd number of times and odd 
//          digits occur even number of times so its print NO.
// Input : 44555
// Output : YES
//         count_even_digits = 2
//         count_odd_digits = 3
//         In this number even digits occur even number of times and odd 
//         digits occur odd number of times so its print YES.


let a=[2,2,3,3,3]
let b=[4,4,5,5,5]
let evenCount=0
let oddCount=0
function evenOdd(arr) 
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            evenCount++ 
        }
        else{
            oddCount++
            
        }
    }
    console.log("even numbers count ="+evenCount);
    console.log("odd numbers count ="+oddCount);

    if(evenCount%2==0 && oddCount%2!=0)
    {
        console.log("yes");
    }
    else{
        console.log("No");
    }
}

evenOdd(a)