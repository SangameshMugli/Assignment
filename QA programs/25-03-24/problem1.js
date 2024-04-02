let array=['B','A','N','A','N','A']

let vowels=['A','E','I','O','U']

for(let i=0;i<array.length;i++)
{
    for(j=i;j<array.length;j++)
    {
        let subString=[]
        let totalarray=[]
        for(k=i;k<=j;k++)
        {
            subString.push(array[k])
        }console.log(subString);
         
}


}



// function minion_game(string) {
//   let stuartScore = 0;
//   let kevinScore = 0;
//   const vowels = ['A', 'E', 'I', 'O', 'U'];

//   for (let i = 0; i < string.length; i++) {
//       if (vowels.includes(string[i])) {
//           kevinScore += string.length - i;
//       } else {
//           stuartScore += string.length - i;
//       }
//   }

//   if (stuartScore > kevinScore) {
//       console.log("Stuart " + stuartScore);
//   } else if (kevinScore > stuartScore) {
//       console.log("Kevin " + kevinScore);
//   } else {
//       console.log("Draw");
//   }
// }

// // Test
// minion_game("BANANA");



 