import express from 'express'
import connedDb from './config/db.js'
import dotenv from 'dotenv'
import cors from  'cors'
import dataRouter from './Routes/dataRoutes.js'
import bodyParser from 'body-parser'
dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.get('/',(req,res)=>{
  res.send('live')
})

app.use("/data",dataRouter)
const port = process.env.PORT || 7000
connedDb()
app.listen(port,()=>{
   console.log('Connected')
})
