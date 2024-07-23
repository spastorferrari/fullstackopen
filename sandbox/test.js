class User {
    constructor(name, age, xp) {
        this.name = name
        this.age = age
        this.xp = xp
    }
    greet(){ 
        console.log("Hi, i'm " + this.name + " am " + this.age + " & have " + this.xp + " xp.")
    }
};

const sebas = new User("SebasPF", 26, 180)
sebas.greet()

const mary = new User("Mary", 26, 200)
mary.greet()