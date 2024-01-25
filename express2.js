import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/user(name)?', (req, res) => {
    res.send('Hello, BC!');
});
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});


app.listen(app.get('port'), () =>{
    console.log('server is running');
})