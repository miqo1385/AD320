import express from "express";


const app = express();
const port = process.env.PORT || 3000;

app.get('/user(name)?', (req, res) => {
    const username = req.params.name ? req.params.name : 'Miguel';
    res.send(`Hello, ${username}!`);
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
