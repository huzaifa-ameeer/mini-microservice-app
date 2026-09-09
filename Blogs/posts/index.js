const express = require("express")
const { randomBytes } = require("crypto") 

const app = express()

const posts = {}

app.get("/posts", (req, res)=>{
    res.send(posts)
})

app.post("/posts", (req, res)=>{
    const id = randomBytes(4).toString("hex")
    const {title} = req.body

    posts[id] = {
        id, title
    }
})

const port = 3000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})