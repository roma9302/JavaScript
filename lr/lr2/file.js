//number 1
var a = 0;
if (a == 0) alert('Верно!'); else alert('Неверно!');

//number 2
var a = 1;
if (a > 0) alert('Верно!'); else alert('Неверно!');

//number 3
var a = -1;
if (a < 0) alert('Верно!'); else alert('Неверно!');

//number 4
var a = 3;
if (a >= 0) alert('Верно!'); else alert('Неверно!');

//number 5
var a = -1;
if (a <= 0) alert('Верно!'); else alert('Неверно!');

//number 6
var a = 0;
if (a != 0) alert('Верно!'); else alert('Неверно!');

//number 7
var a = 0;
if (a == 'test' ) alert('Верно!'); else alert('Неверно!');

//number 8
var a = '1';
if (a ===  1 ) alert('Верно!'); else alert('Неверно!');

//number 9
var test = true;
if (test ==  true ) alert('Верно!'); else alert('Неверно!');

var test = true;
if (test == true) {alert('Верно!');} else {alert('Неверно!');}

//number 10
var test = true;
if (test !=  true ) alert('Верно!'); else alert('Неверно!');

var test = true;
if (test != true) {alert('Верно!');} else {alert('Неверно!');}

//number 11
var a =3;
if (a >0 && a<5 ) alert('Верно!'); else alert('Неверно!');

//number 12
var a =3;
if (a ==0  || a== 2) alert(a+7); else alert(a/10);

//number 13
var a =1;
var b = 3;
if (a <= 1 && b>=3) alert(a+b); else alert(a-b);

//number 14
var a =3;
var b = 3;
if ((a>2 && a<11) || (b>=6 &&  b<14)) alert(true); else alert(false);

//number 15
var num = 1;
switch(num){
    case 1:
    result = 'Зима'
    break
    case 2:
    result = 'Весна'
    break
    case 3:
    result = 'Лето'
    break
    case 4:
    result = 'Осень'
    break
}
alert(result)

//number 16
var a = 31;
var num;
if (a > 0 && a < 11) {
    num = 1; 
} else if (a > 10 && a < 21) {
    num = 2; 
} else if (a > 20 && a < 32) {
    num = 3; 
} 

var result; 
switch(num) {
    case 1:
        result = '1 декада ';
        break;
    case 2:
        result = '2 декада ';
        break;
    case 3:
        result = '3 декада';
        break;
}

alert(result);

//number 17
var a = 6;
var num;
if ( a==12 || (a >= 1 && a <= 2) ) {
    num = 1; 
} else if (a >= 3 && a <= 5) {
    num = 2; 
} else if (a >= 5 && a <= 8) {
    num = 3; 
}else if(a>= 9 && a<12){
  num = 4
}

var result; 
switch(num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'Весна ';
        break;
    case 3:
        result = 'Лето';
        break;
    case 4:
        result = 'Осень';
        break;
}

alert(result);

//number 18
var n ='abcde'
if (n[0] == 'a') alert(true); else alert(false);

//number 19
var n ='12345'
if (n[0] == 1 || n[0] == 2 || n[0] == 3 ) alert(true); else alert(false);

//number 20
var n ='12345'
alert(Number(n[0])+Number(n[1])+Number(n[2]))

//number 21
var n ='123123'
first= (Number(n[0])+Number(n[1])+Number(n[2]))
second = (Number(n[3])+Number(n[4])+Number(n[5]))
if (second == first ) alert(true); else alert(false);
