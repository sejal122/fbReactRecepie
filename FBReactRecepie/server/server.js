const express=require('express')
const cors=require('cors')
const app=express();
app.use(cors())
app.use(express.json())

const {MongoClient}=require('mongodb')

let uri="mongodb+srv://sejalmac:4xz6m3YBZ6XuXmcv@cluster0.h7joqyc.mongodb.net/?retryWrites=true&w=majority"

app.listen(3000,()=>{
    console.log('server running..')
})
app.get('/',async(req,res)=>{
    const client=new MongoClient(uri);
    console.log(client)
    try{
        await client.connect()
        const db=client.db('Users')
        const users=db.collection('users')
        const allusers=await users.find().toArray()
        res.send(allusers)
        console.log(allusers)

    }finally{
        await client.close()
    }
})
app.post('/addnew',async(req,res)=>{
    const client=new MongoClient(uri);
    console.log(client)
    try{
        console.log('in /add new')
        await client.connect()
        const db=client.db('Users')
        const users=db.collection('users')
        console.log(users)
         users.insertOne({
            user_id:1001,
            firstname:'Rahul',
            lastname:'shah'
        })
        res.send(allusers)
        console.log(allusers)

    }finally{
        await client.close()
    }
})