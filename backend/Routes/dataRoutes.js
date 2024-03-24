import express from 'express'
import DataModel from '../Models/dataModel.js'

const dataRouter = express.Router()



dataRouter.post('/post',async(req,res)=>{
    try{
    const newData = await DataModel.insertMany(req.body)
   res.status(201).json({message:'Data Posted'})
    }catch(error){
    res.status(500).json({error:error.message})
    }
})


dataRouter.get('/get',async(req,res)=>{
    try{
  const alldata = await DataModel.find({})
  res.status(200).json(alldata)
  
    }catch(error){
    res.status(500).json({error:error.message})
    }
})


export default dataRouter