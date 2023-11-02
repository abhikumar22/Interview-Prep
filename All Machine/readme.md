//Call


<!-- varialtion 1 -->
let name = {
    name: "abhishek",
    age: 15,
    printDetails: function(){
        console.log("Name: "+this.name+"   Age="+this.age);
    }
}

name.printDetails();

let proxyName = {
    name: "proxyAbhishek",
    age: 30
};

name.printDetails.call(proxyName);


<!-- varialtion 2 -->

let name = {
    name: "abhishek",
    age: 15,
}

let printDetails= function(state){
        console.log("Name: "+this.name+"   Age="+this.age+"   State: "+state);
}

printDetails.call(name,"delhi")



// Apply.

Difference only , args passed as array

printDetails.call(name,["delhi","Jharkhand"])


// Bind.
<!-- bind is same to call, just it gives the copy , which can be invoked later on -->
let name = {
    name: "abhishek",
    age: 15,
}
let proxyName = {
    name: "proxyAbhishek",
    age: 30
};
let printDetails= function(state){
        console.log("Name: "+this.name+"   Age="+this.age+"   State: "+state);
}
const fnToCall = printDetails.bind(name,"delhi")
fnToCall();




// polyfill of bind
