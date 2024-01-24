import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);


app.get('/user', (req, res) => {
    const userName = req.query.name;
    const age = req.query.age;
    const userLast = req.query.last

    res.send(`User Name: ${userName}, age: ${age}, User Last Name ${userLast}`);
});

app.listen(app.get('port'), () =>{
    console.log('Express server is running');
})
