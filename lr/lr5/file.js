//number 1
function g(num){
  return num*num 
}
console.log(g(7))

//number 2
function sum(arg1,arg2){
  return arg1+arg2;
}
console.log(sum(5,7))

//number 3
function math(arg1,arg2,arg3){
  return (arg1-arg2)/arg3
}
console.log(math(3,7,2))

//number 4
function day(num){
  switch(num){
      case 1:
      return "Понедельник"
      break
      case 2:
      return "Вторник"
      break
      case 3:
      return "Среда"
      break
      case 4:
      return "Четверг"
      break
      case 5:
      return "Пятница"
      break
      case 6:
      return "Суббота"
      break
      case 7:
      return "Воскресенье"
      break
      default:
      return "От 1 до 7 включительно"
      break
  }
}
console.log(day(6))

//number 5
var flag = false
function is_five(num){
  for(var i = 0; i<num.length;i++){
    if (num[i]==5){
      flag = true
      return flag
    }
  }
}

if (is_five([1,2,3,6,7,5]) == true){
  console.log('да')
  }else{
  console.log('нет')
}

//number 6
var counter = 0;  
function simple(num){
  for(var i = 1;i<num-1;i++){
    if (num%i == 0){
      counter++
    }
  }
  return counter;
}
a = simple(293)
console.log(a)
if (a==1){
  console.log('false')
  }else{
  console.log('true')  
}

//number 7
var flag = false;
function repeat(arg1){
  for(var i =0;i<arg1.length;i++){
    if(arg1[i]===arg1[i+1]){
      flag = true
      return flag
      break
    }
  }
}
a = (repeat([1,4,6,7,4,4,4]))
console.log(a)
if(a === true){
  console.log('да')
}else{
  console.log('нет')
}
