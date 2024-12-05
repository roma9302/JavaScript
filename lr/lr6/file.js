//number 1
function par(arg1,arg2){
  if (arg1 == arg2){
    return true
  }else{
    return false
  }
}

console.log(par(1 , 1))


//number 2
function par(arg1,arg2){
  if ((arg1 + arg2) > 10 ){
    return true
  }else{
    return false
  }
}

console.log(par(1 , 10))

//number 3
function negative(arg1){
  if (arg1 < 0){
    return true
  }else{
    return false
  }
}

console.log(negative(-3))

//number 4
var str = "";
for(var i =1; i<10;i++){
  str+=i;
}
console.log(str)

//number 5
var str = "";
for(var i =9; i>0;i--){
  str+=i;
}
console.log(str)


//number 6
var str = " ";
for(var i =1; i<10;i++){
  str+= "-" + i ;
}
console.log(str +"-")

//number 7
var str = " ";
for(var i =0; i<2;i++){
  for(var b= 0; b<10; b++){
    str+= "X";
    console.log(str +"\n")
  }  
}

//number 8
for (var i = 1; i < 10; i++) {   
    var str = "";
    for (var b = 0; b < i; b++) {   
        str += i;  
    }
    console.log(str); 
}

//numbet 9
var str = "X";
  for(var b= 0; b<10; b++){
  str += "X" ;
  if(b%2 == 0){
    console.log(str +"\n")
  }
}

//number 10
var array = [];
str = "";

for(var i= 0;i<10;i++){
  str += "x"
  array[i] = str;
}

console.log(array)

//number 11
var array =[];
for (var i = 0; i < 10; i++) {   
    var str = "";
    for (var b = 0; b < i; b++) {   
        str += i;  
    }
  array[i] = str;
}

console.log(array);


//number 12
var array =[];

function arrayFill(element,len_array){
  for(var i =0;i<len_array;i++){
    array[i] = element;
  }
  console.log(array)
}

console.log(arrayFill(4,5))

//number 13
var counter = 0;
var sum =0;
var array = [1,6,2,4,3,7]

for(var i = 0;i<array.length ; i++){
  if(sum<10){
    sum+=array[i]
    counter++
  }
}

console.log(counter)


//number 14
var array = [6,2,4,3,7,5,7,5]
var array1 =[]

for(var i = 0;i<array.length ; i++){
  array1[i] = array[array.length - i - 1]
  }


console.log(array)

//number 15 
var array = [[1, 2, 3], [4, 5], [6]];
var sum = 0; 

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    sum += array[i][j]; 
  }
}

console.log(sum);


//number 16
var array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0; 

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    for(var g = 0; g<array[i][j].length; g++)
    sum += array[i][j][g]; 
  }
}
console.log(sum);
