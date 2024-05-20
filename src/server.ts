import express from 'express'
import { UserController } from '@controllers/UserController'

const app = express()
app.get('/', (request, response)=>{
    const user = new UserController()
    
    
    return response.json({message: user.getUser()})


})
app.listen(5000)