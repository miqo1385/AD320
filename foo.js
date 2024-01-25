import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) =>{
    res.type('plain/text');
    res.send('HELLO WORLD');
} );

app.use((req, res, next) => {
    console.log('/foo', 'plain/text')
    next()
});

app.get('/foo', (req, res) => {
    res.send("Miguel's home page")
});
app.get('/about', (req, res) =>{
    res.type('plain/text');
    res.send('About Page');
} );

app.use((req, res) =>{
    res.type('plain/text');
    res.status(404);
    res.send('Not Found');

});

app.listen(app.get('port'), () =>{
    console.log('Express server is running');
})