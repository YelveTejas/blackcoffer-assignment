import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()
const connedDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log(`Mongodb ${connect.connection.host}`)
    }catch(error){
        console.log(error.message)
        process.exit()
    }

}

export default connedDb