//number 1
var arr = [6,1,6,9,4];
var [elem1,elem2,elem3,...arr]=[arr[0],arr[1],arr[2],arr[3],arr[4]]
alert(arr , elem1,elem2,elem3)

//number 2
var arr = [6,1,6,9,4,737,7,4,8,3,7,4,0];
var [elem1,elem2] =[arr[arr.length -1],arr[arr.length -2]]
alert(elem2)

//number 3
var arr = [6,1,6,9,4,737,7,4,8,3,7,4,0];
var [elem1,elem2 = arr[1]] = []
alert(elem2)

//number 4
var arr = [6,1,6,9,4,737,7,4,8,3,7,4,0];
var [elem1,elem2 = 'bbb',elem3 = 'eee'] = [,arr[1],arr[2]]
alert(elem2)

//number 5
var lexa_babitski =  {name: 'Петр',
      'surname': 'Петров', 
      'age': '20 лет'};
let {name,surname,age} = lexa_babitski;
alert(surname)

//number 6
var lexa_babitski = {name: 'Петр',
      'age': '20 лет'};
let {name='Аноном',surname= 'Анономович',age = '? лет'} = lexa_babitski;
alert(surname)

//number 7 
var antony = [1,3,6,8,8,5,5,3]
for(var gg of antony){
  alert(gg)
}

//number 8
var antony = [1,3,6,8,8,5,5,3].reverse()
for(var gg of antony){
  alert(gg)
}

//nunber 9
var sum = 0;
var antony = [1,3,6,8,8,5,5,3]
for(var gg of antony){
  sum+=gg
}
alert(sum)


//number 10 
counter =0;
for(var gg of 'поломка окна строго монотонно'){
  if(gg == 'о'){
    counter+=1
  }
}
alert(counter)

//number 11
function hello_name(name='Аноним'){
  alert('Привет ' +  ',' + name)
}

hello_name(1)

//number 12
let options = {
  id: 'elem',
  border: '1px solid red', 
  font: '15px Arial'
  }

function func({id , color='blue', border= '1px solid red', font= '15px Arial'}) {
 alert(color); 
    alert(id)
}
func(options);

//number 13
//html
 <p>0</p>
    <p>0</p>
    <p>0</p>

    <script>
        var num = document.querySelectorAll('p');
        num.forEach(elem => {
            var  second;
            elem.addEventListener('click', () => {
                second = window.setInterval(() => {
                    elem.innerHTML = Number(elem.innerHTML) + 1;
                }, 1000);
            });
        });
    </script>
