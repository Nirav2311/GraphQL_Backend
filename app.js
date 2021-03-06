const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema')
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())

mongo_URI = "mongodb+srv://Nirav:abc@123@cluster0-piykq.mongodb.net/test"
mongoose.connect(mongo_URI,{useUnifiedTopology:true, useNewUrlParser:true}) 
mongoose.connection.once('open',()=>{
    console.log("Connected to database")
})

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("Now listening for request on port 4000....")
})