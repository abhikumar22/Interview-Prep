class Animal {
    constructor(name) {
        this.name = name;
    }
    getName(){
        console.log("Name of the animal: ",this.name);
    }
}

class Lion extends Animal{
    // calling parent Class contructor and initializing with LION
    constructor(){
        super('LION')
    }
}

const lion = new Animal('LION');
// print lion
lion.getName();

const L_ion = new Lion();
// print lion as due to inheritance
L_ion.getName();