// Reversing a String - Implement a recursive function to reverse a string using recursion

let string='sangamesh'
let reverse=""

for(let i=string.length-1;i>=0;i--)
{
   reverse=reverse+string[i]
}
console.log(reverse);


console.log("recursion method");

function reversestring(string)
{
    if(string==="" && string===1)
    {
        return string
    }
     
    let reverse=""
    if( string.length>0)
    {
        reverse=reverse+string
    }console.log(reverse);
}

let str="abcd"
 reversestring(str)