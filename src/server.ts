import express from 'express'

const app = express()

import employeeRoutes from './routes/employee-routes'


app.use('/employee', employeeRoutes)

app.get('/', (req,res)=>{
  res.json({mensage: 'Server is running'})
})


app.listen(5555, ()=>{
  console.log('Server is running');  
})

