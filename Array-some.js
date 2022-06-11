let fruits = [
    {name : "Banana",number:"3"},
    {name : "Mongo",number:"3"},
    {name : "Peache", number:"3"}]

    // DON'T
let gotMongo = fruits.some(fruit=>{fruit.name="Mongo"})
    // DO
//let gotMongo = fruits.some(fruit=>fruit.name="Mongo")

if(gotMongo)
    console.log("Fruits got mongo")
else
    console.log("No mongo founded")