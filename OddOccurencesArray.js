//Version 01
//Create the dummy array
var arrayA=[9,3,9,3,9,7,9,5];
var normalArray=[];
var threesArray=[];
var randomArray=[];
var newArray=[];
//Version 01 for loop
/*for (let index = 0; index < arrayA.length; index++) 
{
 
    if (arrayA[index]===9)
    {
        ninesArray.push(arrayA[index]);
        console.log(ninesArray);
    }
    else if (arrayA[index]===3) 
    {
        threesArray.push(arrayA[index]);
        console.log(threesArray);
    }
    else
    {
        randomArray.push(arrayA[index]);
        console.log(randomArray);
    }  

    
}*/

//Version 02 for loop
function solution(arrayB) 
{
    for (var index = 0; index < arrayB.length; index++) 
{
    debugger;
    
   if (arrayB[index]!=arrayB[index]) 
   {
       normalArray.push(arrayB[index]);
     
   }
   else 
   {
    randomArray.push(arrayA[index]);
    
   }
   
}
return randomArray;
}
