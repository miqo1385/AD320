import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);


app.get('/get', (req, res) => {
    const userName = req.query.name;
    const age = req.query.age;
    const userLast = req.query.last

    res.send(`User Name: ${userName}, age: ${age}, User Last Name: ${userLast}`);
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(app.get('port'), () =>{
    console.log('server is running');
})
