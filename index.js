const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require('./pair');

require('events').EventEmitter.defaultMaxListeners = 500;

app.use('/code', code);
app.use('/pair', async (req, res, next) => {
    res.sendFile(__path + '/pair.html');
});
app.use('/', async (req, res, next) => {
    res.sendFile(__path + '/main.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Changed here to bind on 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
Don't Forget To Give Star ‼️

𝐏𝙾𝚆𝙴𝚁𝙴𝙳 𝐁𝚈 sanchotech 

Server running on http://0.0.0.0:` + PORT);
});

module.exports = app;
