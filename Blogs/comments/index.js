const express = require("express")
const { randomBytes } = require("crypto")

const app = express()
app.use(express.json())
const port = 3001
const commentsByPostId = {}

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex")
    const { content } = req.body
    const comments = commentsByPostId[req.params.id] || []
    comments.push({
        id: commentId, content
    })
    commentsByPostId[req.params.id] = comments
    res.status(201).json({
        message: "comment created successfully"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})