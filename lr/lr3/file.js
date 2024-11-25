//number 1
var i = 1;
while(i<101){
  alert(i)
  i++
}

for (var i = 1; i < 101; i++) {
  console.log(i);
}

//number 2
var i = 11;
while(i<34){
  console.log(i)
  i++
}

var e = 34
for (var i = 1; i < e ; i++) {
  console.log(i);
}

//number 3
for (var i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

var i = 0; 
while (i < 101) {
 i++;
 console.log(i);
}

//number 4
var sum =0;
for (var i = 1; i < 101; i++) {
  sum +=i
console.log(sum);
}

var sum =0;
var i = 0;
while(i<101) {
  sum +=i
    console.log(sum);
  i++
}

//number 5
var arr = [1,2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
alert(arr[i]);
}

//number 6
var result = 0;
var arr = [1,2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
 result += arr[i];
}
alert(result);

//number 7
var obj = {green: 'зеленый',
           red: 'красный',
           blue: 'голубой'}
for(key in obj){
  alert(key + ' - это ' + obj[key] + '.');
}

//number 8
var obj = {"Коля":200,
           "Вася":300,
           "Петя":400}
for(key in obj){
  alert(key + '- зарплата ' + obj[key] +' Долларов')
}

//number 9
var sum = 0;
var mas = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < mas.length; i++) {
  if (mas[i] > 3 && mas[i] < 10) {
    sum += mas[i];
  }
}
alert(sum)

//number 10
var sum = 0;
var mas = [1, 2, -5, 9, 4, -13, 4, -10];
for (var i = 0; i < mas.length; i++) {
  if (mas[i] > 0) {
    sum += mas[i];
  }
}
alert(sum)

//number 11
var arr =[1, 2, 5, 9, 4, 13, 4, 10]
for(var i =0; i<arr.length ; i++){
  if(i===4){
    alert("Четверка Есть!")  
  }
}

//number 12
var numbers = [10, 20, 30, 50, 235, 3000];
num = [];
for (var i = 0; i < numbers.length; i++) {
    first = String(numbers[i])[0];
    if (first === '1' || first === '2' || first === '5') {
        num.push(numbers[i]);
    }
}
alert(num);

//number 13 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var new_arr = []; 
for (var i = 0; i < arr.length; i++) {
    new_arr.push(arr[i]); 
}
var new_str = new_arr.join('-'); 
alert('-' + new_str + '-');

//number 14 
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Дни недели</title>
</head>
<body>
    <script>
        var days = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        ];

        for (var i = 0; i < days.length; i++) {
            if (i == 5 || i == 6) {
                alert('<b>' + days[i] + '</b><br>');
            } else {
                alert(days[i] + '<br>');
            }
        }
    </script>
</body>
</html>


//number 15
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Дни недели</title>
</head>
<body>
    <script>

        var days = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        ];
        var day=['Понедельник']
        for (var i = 0; i < days.length; i++) {
            if (i=== day) {
                alert('<i>' + days[i] + '</b><br>');
            } else {
                alert(days[i] + '<br>');
            }
        }
    </script>
</body>
</html>


//number 16
var n = 1000;
var num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n); 
console.log(num);
