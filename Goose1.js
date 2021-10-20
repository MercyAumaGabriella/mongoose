//FILTERING

const mongoose = require('mongoose');

async function main() {
    //always specify the database eg employees
    await mongoose.connect("mongodb://localhost:27017/employees");

    //specify a schema
    const ContactSchema = mongoose.Schema({
        name: String,
        phone: String
    });

    //creating instance of model based on schema. Model links schema to db
    const ContactModel = mongoose.model("Contacts", ContactSchema);

    //always await the database record retrieval
    //FILTERING HERE
    const contacts = await ContactModel.find({name: "Achellam Guy"});
    contacts.forEach((contact) => {
        console.log(`The name is: ${contact.name}`);
    });

    console.log("We are connected");
};

main();

//mongoose should be used a certain way
