const express = require('express');
const app = express();
const argv = require('yargs').argv;

const port = argv.p || argv.port || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).on('error', (err) => {

    if(err.code === 'EADDRINUSE') {
        return console.error(`Port ${port} already in use. Use -p when starting to provide another port`);
    }

    console.error(err);
});