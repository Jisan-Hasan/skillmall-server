const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());


const courses = require('./data/courses.json');
const courseDetails = require('./data/courses-details.json');



app.get("/", (req, res)=>{
    res.send("Server is responding");
})

app.get('/courses', (req, res)=> {
    res.send(courses);
})

app.get(`/course`, (req, res) => {
    res.send(courseDetails);
})


app.listen(port, () => {
    console.log("Server is running on port: ", port);
})