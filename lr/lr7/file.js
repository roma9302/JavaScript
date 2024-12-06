//number 1
function isNumberInRange(arg1){
  if(arg1 > 0 && arg1<10){
    return true
  }else{
    return false
  }
}

console.log(isNumberInRange(-3))

//number 2
var array1 = [1, 6, 8, 4, 7, 3, 9, 11];
var array2 = [];

function isNumberInRange(arg1) {
  for (var i = 0; i < arg1.length; i++) {
    if (arg1[i] > 0 && arg1[i] < 10) {
      array2.push(arg1[i]);
    }
  }
  return array2; 
}

console.log(isNumberInRange(array1));


//number 3
function getDigitsSum(arg1) {
      var sum = 0;
      var result = String(arg1);
   for (var i = 0; i < result.length; i++) {
     sum += Number(result[i]);
   
  }
   return sum;
}


//number 4
var array = [];

function getDigitsSum(arg1) {
      var sum = 0;
      var result = String(arg1);
   for (var i = 0; i < result.length; i++) {
     sum += Number(result[i]);
     
  }
   return sum;
}


for (var i = 1; i <= 2020; i++) {
   if (getDigitsSum(i) == 13) {
     array.push(i);
     }
    }
    
console.log(array);

//number 5
function isEven(arg1){
   if(arg1 %2 == 0){
     return true
   }else{
     return false
   }
 }


console.log(isEven(99))


//number 6
var array1 = [1000,60,4,8,4,7,9,3];
var array2 = [];


function isEven(arg1){
   if(arg1 %2 === 0){
     return true
   }else{
     return false
   }
 }


for(var i = 0; i<array1.length;i++){
  if(isEven(array1[i]) === true){
    array2.push(array1[i])
  }
}

console.log(array2)


//number 7
var array =[];

function getDivisors(arg1){
  for(var i=0;i<arg1+1;i++){
    if (arg1%i === 0){
      array.push(i)
    }
  }
  return array
}

console.log(getDivisors(100))
