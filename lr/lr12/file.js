//number 1
class worker {
  constructor(name,surname,rate,days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;   
  }

  getSalary() {
    return this.rate*this.days;
  }
}

let user1 = new worker("Иван",'Иванович',102,30);
money1 = user1.getSalary();
let user2 = new worker('ярик','Синегуб',31,9)
money2 = user2.getSalary();
alert(money1+money2)


//number 2
class worker {
  #name
  #surname
  #rate
  #days
  
  constructor(name,surname,rate,days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;   
  }

  get getSalary() {
    return this.#rate*this.#days;
  }
  
  get getName(){
    return this.#name;
  }

  get getSurname(){
    return this.#surname;
  }

  get getRate(){
    return this.#rate;
  }

  get getDays(){
    return this.#days;
  }
}

let user1 = new worker("Иван",'Иванович',102,30);
alert(user1.getDays)
alert(user1.getRate)
alert(user1.getSurname)
alert(user1.getName)
alert(user1.getSalary)

//number 3
class worker {
  #name
  #surname
  #rate
  #days
  
  constructor(name,surname,rate,days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;   
  }

  get getSalary() {
    return this.#rate*this.#days;
  }
  
  get getName(){
    return this.#name;
  }

  get getSurname(){
    return this.#surname;
  }

  get getRate(){
    return this.#rate;
  }

  get getDays(){
    return this.#days;
  }

  set SetRate(value){    
    if(value>0){
      this.#rate=value;
    }
  }
  
  set SetDays(value){
    if(value>0){
      this.#days=value;
    }
  }
  
}

let user1 = new worker("Иван",'Иванович',102,30);
alert(user1.getDays)
alert(user1.getRate)
alert(user1.getSurname)
alert(user1.getName)
alert(user1.getSalary)
user1.SetRate = 2
user1.SetDays = 8
alert(user1.getSalary)

//number 4
class MyString {

  getReverse(str) {
        let rev_str = ''; 
        for (let i = 0; i < str.length; i++) {
            rev_str += str[str.length - i - 1]; 
        }
        return rev_str; 
  }


  ucFirst(str){
    return str[0].toUpperCase()+str.slice(1);
  }

  ucWords(str){
    let new_str = ''
    let words = str.split(' ');
    for(let i = 0 ;i<words.length;i++){
      new_str += words[i][0].toUpperCase()+words[i].slice(1)+' ';      
      }
    return new_str;
  }
}


var str = new MyString();
alert(str.getReverse('Roma'));
alert(str.ucFirst('romchik'));
alert(str.ucWords('mama s k'))

//number 5
class Validator{
    
    isEmail(value){
        if(value.includes('.') && value.includes('@') && value.length >=6 ){
            return true;
            }else{
                return false;
        }
    } 
    
    isDomain(value) {
        if (value.length < 2 || value.length > 63) {
            return false;
        }

        if (value[0] === '-' || value[value.length - 1] === '-') {
            return false;
        }

        if (!value.includes('.')) {
            return false;
        }

        for (let i = 0; i < value.length; i++) {
            if ( value[i]=== ' ' || value[i] === '_' || ( value[i] === '-' && value[i + 1] === '-')) {
                return false;
            }
        }
        return true;
    }
    
    
    isDate(value){
        if(value[2] != '.' || value[5] != '.'){
            return false;
        }
        
        var day = value.slice(0, 2);
        var mon = value.slice(3, 5);
        var year = value.slice(6, 10);
        
        day = parseInt(day, 10);
        mon = parseInt(mon, 10);
        year = parseInt(year, 10);


        if (mon < 1 || mon > 12) {
            return false; 
        }
        
        if (day < 1 || day > 31) {
            return false; 
        }
        return true;
    }
    
    
    isPhone(value) {
        
        var value = value.replaceAll('-', '');
        var value = value.replaceAll('(','');
        var value = value.replaceAll(')','');
        var value = value.replaceAll(' ','');
        
        if(value.length != 12){
            const phone = /^\+?[1-9]\d{1,14}$/;  
            return phone.test(value);
        }
        return false;
    }
    
}


var valid = new Validator();
alert(valid.isEmail("Roma338093@gmail.com"))
alert(valid.isDomain("wiki.org"))
alert(valid.isDate("01.04.2004"))
alert(valid.isPhone("+375 (29) 753-41-44"))
