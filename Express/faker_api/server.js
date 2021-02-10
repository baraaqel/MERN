const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}



class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    user = new User()
    res.json( user );
});


app.get("/api/companies/new", (req, res) => {
    company = new Company();
    res.json( company );
});

app.get("/api/users/companies", (req, res) => {
    company = new Company();
    user = new User();
    res.json({
        company: company,
        user: user
    })
})

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.listen( port, () => console.log(`Listening on port: ${port}`) );