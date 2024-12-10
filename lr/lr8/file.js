//number 1 
var result = '';

function ucfirst(arg){
    var split_str = arg.split(" ");
    for(var i = 0; i<split_str.length ; i++){
        var WordUpper = split_str[i].substring(0,1).toUpperCase();
        var other = split_str[i].substring(1,split_str[i].length);
        result += WordUpper + other + ' ';
    }
    return result
}


console.log(ucfirst("hома hора kашина aньтон mага"))

//number 2
var result = '';
var str = 'var_text_hello';
var rep_str = '';

function ucfirst(arg){
    var split_str = arg.split(" ");
    for(var i = 0; i<split_str.length ; i++){
        var WordUpper = split_str[i].substring(0,1).toUpperCase();
        var other = split_str[i].substring(1,split_str[i].length);
        result += WordUpper + other + ' ';
    }
    return result
}

rep_str = str.replaceAll('_' , " ")
space = ucfirst(rep_str)
result = space.replaceAll(" ", "")
result = result[0].toLowerCase() + result.substring(1);


console.log(result)


//number 3
function inArray(arg, massiv) {
    for (var item of massiv) {
        if (item.includes(arg)) {
            return true; 
        }else{
            return false; 
        }
    }
}
console.log(inArray('ma' , ['aahjmaa']))

//number 4
var str = '123456';

str = str.split('')
for(var i = 0; i< str.length; i+=2){
    str.splice(i,0,str.splice(i+1,1))
}

console.log(str)


//number 5
var fac = 1;

function factorial(arg1){
    for(var i = 1; i< arg1+1;i++){
        fac *=i;
    }
    return fac
}

console.log(factorial(5))

//number 6
function random_num(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


console.log(random_num(4,44))


//number 7
var uniq = [];
  
function unique(arg1) {
  for (var elem of arg1) {
    if (!uniq.includes(elem)) {
      uniq.push(elem);
    }
  }
  return uniq;
}



console.log(unique([1,3,5,67,3,6,2]))


//number 8
function union(arg1, arg2) {
  var union = new Set(arg1);
  for (var elem of arg2) {
    union.add(elem);
  }
  return union;
}


console.log(union([1,4,6,4,6] , [3,6,3,7,3,5]))


//number 9
function arbuz(arg1){
  for(var i = 0; i<arg1.length-1;i++){
    for(var j = 0; j<arg1.length - i- 1; j++){
      if(arg1[j] > arg1[j+1]){
        temp = arg1[j];
        arg1[j]= arg1[j+1];
        arg1[j+1] = temp;
      }
    }
  }
  return arg1;
}

console.log(arbuz([1,3,5,6,34,8,5,3]))


//number 10
function palindrome(array) {
    reverse =[];
    
    for (var i = 0; i < array.length; i++) {
        reverse[i] = array[array.length - i - 1];
    }

    for (var j = 0; j < array.length; j++) {
        if (array[j] !== reverse[j]) {
            return "Не палиндром";
        }
    }
    return "палиндром"
}


console.log(palindrome([1,4,3,4,5,1]))
