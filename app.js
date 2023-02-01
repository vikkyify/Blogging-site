const express = require('express')
const res = require('express/lib/response')
const app = express()
app.set('view engine','ejs')
// Middleware
app.use('/assets', express.static('assets'))
// Home route
app.get('/', (req, res)=>{
    res.render('index')
})
// Add Blogs
app.get("/addBlogs", (req, res) =>{
    res.render('addBlogs', {username: 'victory'})
})
// success
app.post('/success', (req, body) => {
    console.log(req.body)
    res.render('success')
})

// listener
const port = 3000

app.listen(port, ()=>{
    console.log(`App started on port ${port}`);
})
// classwork
// Handle login and register get route