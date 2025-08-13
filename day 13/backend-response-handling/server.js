//import exress package 
import express, { request, response } from 'express'

//create app variable
const app = express()

//define port number
const port = 3000

//define request parsing
app.use(express.json())

//API section start
app.get('/test',(request,response) => {
    response.send('api is up')
})

// status code handling
app.get('/read-user' , (request,response) => {
    let user = null
    //let user = {
    // 'age':26 
    // }

    if (user == null)
    response.status(404).send('data not found')
    else
        response.status(200).json(user)
        
    })



//API section end

//start server
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})