//number 1
var arr = ['a', 'b', 'c']
alert(arr)

//number 2
var arr = ['a', 'b', 'c']
alert(arr[0])
alert(arr[1])
alert(arr[2])

//number 3
var arr = ['a', 'b', 'c','d']
alert(arr[0]+arr[1])
alert(arr[2]+arr[3])

//number 4
var arr = [2,5,3,9]
result= (arr[0]*arr[1])+(arr[2]*arr[3])
alert(result)

//number 5
var obj = {a: 1, b: 2, c: 3};
alert(obj.c)
alert(obj['c'])

//number 6
var obj = {Коля: '1000', Вася: '500', Петя: '200'};
alert(obj['Коля'])
alert(obj['Петя'])

//number 7
var nowDay = new Date();
var day = nowDay.getDay() 
var week={
  1:'Понедельник',
  2:'Вторник',
  3:'Среда',
  4:'Четверг',
  5:'Пятница',
  6:'Суббота',
  7:'Воскресенье'
}
alert(week[day])

//number 8
var day = 3;
var week={
  1:'Понедельник',
  2:'Вторник',
  3:'Среда',
  4:'Четверг',
  5:'Пятница',
  6:'Суббота',
  7:'Воскресенье'
}
alert(week[day])

//number 9
var arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(arr[1][0]);

//number 10
var arr = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(arr['js'][0]);

//number 11
var week_en_ru={
  'ru':{
    0:'Понедельник',
    1:'Вторник',
    2:'Среда',
    3:'Четверг',
    4:'Пятница',
    5:'Суббота',
    6:'Воскресенье'
  },
  'en':{
    0:'Monday',
    1:'Tuesday',
    2:'Wednesday',
    3:'Thursday',
    4:'Friday',
    5:'Saturday',
    6:'Sunday'
  }
}
alert(week_en_ru['ru'][0]);
alert(week_en_ru['en'][2])


//number 12
lang = 'ru';
day = 4;
var week_en_ru={
  'ru':{
    0:'Понедельник',
    1:'Вторник',
    2:'Среда',
    3:'Четверг',
    4:'Пятница',
    5:'Суббота',
    6:'Воскресенье'
  },
  'en':{
    0:'Monday',
    1:'Tuesday',
    2:'Wednesday',
    3:'Thursday',
    4:'Friday',
    5:'Saturday',
    6:'Sunday'
  }
}
alert(week_en_ru[lang][day]);
