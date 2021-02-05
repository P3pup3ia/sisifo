import { Router } from 'express'

const routes = Router()

routes.get('/employee',(req,res)=>{

  res.json({message:'Emproyee'})
})

export default routes