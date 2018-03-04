
class Person{
   
    constructor(name, age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `Name : ${this.name} and age : ${this.age == 0 ? 'he or she have a monthes': this.age + 'years old' } `;
    }
    getGreeting(){
        return `Hi! I am ${this.name}`;
    }
}

class Traveler extends Person{
    constructor(name, age, location){
        super(name, age,)
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let info = super.getGreeting();
        this.hasLocation() ? info += ` am visiting from ${this.location}` : info ; 
        console.log(info);
    }
}


// const me = new Person('Ebrah');
// const myFriend = new Person('Hans' , 80);

const travel = new Traveler('Ebran', 26, 'Mbeya');
console.log(travel.getGreeting());

// console.log(me.getDescription());
// console.log(myFriend.getDescription());