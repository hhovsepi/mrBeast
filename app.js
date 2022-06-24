let express = require('express');
let fetch = require('node-fetch');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { text: 'Mr. Beast Video Idea Generator' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

const videoRouter = require('./routes/videos');

app.use('/videos', videoRouter);

