//number 1
class User{
  constructor(name,surname,year){
    this.name = name;
    this.surname = surname;
    this.year = year;
  }


  getFullName(){
    alert(this.name + ' ' + this.surname)
  }

  
}


class Student extends User{
  constructor(name,surname,year){
    super(name,surname,year);
  }
  getCourse(){
    var today = new Date();
    let year_today = today.getFullYear(); 
    alert(year_today-Number(this.year))  
  }
  
}


user = new Student("Александр","Пушкин","2023")
alert(user.name)
alert(user.surname)
alert(user.year)
user.getFullName()
user.getCourse()
