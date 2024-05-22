const cat = {
  weight : `8 lbs`,
  furColor : `grey`,
  eyeColor : `green`,
  catSound : `meow` ,
  catDiet : `fish`
}
console.log(cat);

cat.catDiet = `chicken`;
console.log(cat);

function Profile(firstName, lastName, gender, grade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.grade = grade;
}
const myPerson = new Profile('Natalie', 'Roark', 'Female', '2016');
console.log(myPerson);
console.log(myPerson.grade)

class Person {
    #firstName;
    #lastName;
    #gender;
    #grade;
    constructor (firstName, lastName, gender, grade){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#gender = gender;
        this.#grade = grade;
    }
}
const myProfile = new Person('Blake', 'Hillway', 'Female','11')
console.log(myProfile.grade);

class Student {
    #firstName;
    #lastName;
    #gender;
    #grade;
    constructor (firstName, lastName, gender,grade){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#gender = gender;
        this.#grade = grade;
    }
    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    get gender() {
        return this.#gender;
    }
    get grade() {
        return this.#grade;
    }
    set firstName(value) {
        this.#firstName = value;
    }
    set lastName(value) {
        this.#lastName = value;
    }
    set gender(value) {
        this.#gender = value;
    }
    set grade(value) {
        this.#grade = value;
    }

}
const myStudent = new Student('Voy', 'Spears','Male', '12')
console.log(myStudent.firstName);
console.log(myStudent.lastName);
console.log(myStudent.gender);
console.log(myStudent.grade);

myStudent.firstName = 'Kal';
myStudent.grade = 2024
console.log(myStudent.firstName);
console.log(myStudent.grade);
