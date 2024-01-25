import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/foo', (req, res, next) => {
    const randomResponse = Math.random() < 0.5 ? 'sometimes this' : next();
    res.send(randomResponse);
});

app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});
app.use((req, res) =>{
    res.type('plain/text');
    res.status(404);
    res.send('Not Found');

});

app.listen(app.get('port'), () =>{
    console.log('Express server is running');
})