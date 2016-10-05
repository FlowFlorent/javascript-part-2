function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

function Email (address, type){
    this.address = address;
    if (type === "work" || type === "home"){this.type = type;}
    else {this.type = "other";}
}

Person.prototype = {
    addEmail: function(address, type){
        this.emails.push(new Email(address, type))
    }
}

var dude = new Person("Flo", "Lef");

console.log(dude);
dude.addEmail("hillary@hacked.emails", "home");
dude.addEmail("hillary@oval.office", "work");
console.log(dude)