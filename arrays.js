// let superHeros = ["spiderman","xmen","hamed","batman","flash","iron-man","doaa"];
// // console.log(superHeros);
// // superHeros.unshift("hisham");
// // // superHeros.splice(1,2,"Hisham","tariq");
// // console.log(superHeros);
// // console.log(superHeros.includes("Hisham".toLowerCase()))

// for (let index = 0; index < superHeros.length; index++) {
//     console.log(superHeros[index]);
    
// }
let numbers = [1,2,3,4,5];

function sum(arr) {

    let sum =0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }
    console.log(sum);

    
}

sum(numbers);

function product(arr) {

    let product =1;
    for (let index = 0; index < arr.length; index++) {
        product *= arr[index];
        
    }
    console.log(product);

    
}
product(numbers);


// exercises Lab1 day04
//my solution ex1
function addDashesEvenNums(number) {
    let str = number.toString();
    let result = [str[0]];
    for (let i = 1; i < str.length; i++) 
    {
        if(str[i] % 2 == 0 && str[i-1] % 2 == 0) 
      result.push('-', str[i]);
        else
      result.push(str[i])
    }
    console.log(result.join("" ,result ));
  }
  addDashesEvenNums(225486764);
//=================================================

//ex 2
function frequent(arr) {
    let mode = [];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i])

        for (let j = 0; j < j.i; j++) {
            
        }
        
    }

    
}