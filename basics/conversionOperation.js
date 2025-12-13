let value=4;
let newValue = -value ;
//console.log(newValue)// it will print a -ve value 

// ************** operations **************/
//the operations can be 

// console.log(2+3)
// console.log(8*9)
// console.log(3%6)
// console.log(3/3)
// console.log(2**3)




let str1="helllo "
let str2="sudhanshu "
let str3=str1+str2;
console.log(str3)



 // specal case in strings 

//  console.log("1"+2)  // it will print 12
//  console.log(1+"2")// it will also print 12

//  console.log("1" +2 +2) // it will print 122  because in js firs data type will be checked after that it weil be converted according to the first gievn data types 



//  console.log(1+2+"2")// it wil print 32  it prints this because 1 and 2 are added 
// console.log(1+"2"+3)// it will print 123


console.log(+"") // it wil print 1 and 0

console.log(+true)// it will print 1

console.log(+true)// output 1 
// it will show error console.log(true+)


/*********  prifix and postfix */


let gameCounter = 100;
++gameCounter;
console.log(gameCounter)


gameCounter++;
gameCounter++;
console.log(gameCounter)