const express = require("express");
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.quaequt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const expenseCollection = client.db("moneyTracker").collection("cost")

        app.post("/expense",async(req,res)=>{
            const expense = req.body;
            const result = await expenseCollection.insertOne(expense);
            res.send(result);
        })


        app.get("/expense",async(req,res)=>{
            const query = {}
            const result = await expenseCollection.find(query,{"_id":1}).sort({_id:-1}).toArray();
            // const posts = await postCollection.find(query,{"_id":1}).sort({_id:-1}).toArray();
            res.send(result);
        })

    }
    finally{

    }
}

run().catch(err => console.log(err))


app.get("/",(req,res)=>{
    res.send("server is running");
})

app.listen(port , () =>{
    console.log("listing on port")
})