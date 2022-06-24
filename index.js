const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

const staticFolder = path.resolve(__dirname, './www');
if (!fs.existsSync(staticFolder)) {
    console.log("There is not a www folder");
    process.exit(1);
}
app.use(express.static(staticFolder));

const pathIndex = path.resolve(__dirname, './www/index.html');

if (!fs.existsSync(pathIndex)) {
    console.log(pathIndex);
    console.log("There's not an index.html in www folder");
    process.exit(1);
}

app.get('/*', (req, res) => {

    res.sendFile(pathIndex);
});

const port = process.env.PORT || 3001;

app.listen(port, err => err ? console.log(err) : console.log('Server on'));