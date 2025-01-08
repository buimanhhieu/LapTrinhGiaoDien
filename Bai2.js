var massMark=78;
var massJohn=95;
var heightMark=1.69;
var heightJohn=1.88;
var markBMI = (massMark/ (heightMark*heightMark));
var johnBMI = (massJohn/ (heightJohn*heightJohn));
console.log("Data 1 :");
if(markBMI>johnBMI){
    console.log("Mark's BMI is higher than John");
    console.log("Mark's BMI ("+markBMI+") is higher than John's ("+johnBMI+")!");
}else{
    console.log("John's BMI is higher than Mark");
    console.log("John's BMI ("+johnBMI+") is higher than Mark's ("+markBMI+")!");
}


var massMark2=95;
var massJohn2=85;
var heightMark2=1.88;
var heightJohn2=1.76;
var markBMI2 = (massMark2/ (heightMark2*heightMark2));
var johnBMI2 = (massJohn2/ (heightJohn2*heightJohn2));
console.log("Data 2 :");
if(markBMI2>johnBMI2){
    console.log("Mark's BMI is higher than John");
    console.log("Mark's BMI ("+markBMI2+") is higher than John's ("+johnBMI2+")!");
}else{
    console.log("John's BMI is higher than Mark");
    console.log("John's BMI ("+johnBMI2+") is higher than Mark's ("+markBMI2+")!");
}
