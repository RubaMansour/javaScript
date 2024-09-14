
let myString = 'hello,this,is,a,difficult,to,read,sentence';



/* --- Code that will test your solution, do NOT change. Write above this line --- */
let newMyString=myString.replace(/,/g," ")
console.log(newMyString)


console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');