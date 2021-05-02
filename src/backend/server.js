const express = require('express');
const cors = require('cors');

const port = 400;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("<h1>Hello</h1>")
});

app.post("/register", (req, res) => {
    const {username, password} = req.body;
    res.json({
        username,
        password,
        
    });
    res.send(
        console.log("hello")
    );
});




app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});