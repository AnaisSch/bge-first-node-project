const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log("SERVER STARTED...");
});
/* app.get('/', (request, response) => {
    console.log(request);
    console.log(response);
    console.log('access to / path');
}); */
app.get('/', (req, res) => {
    console.log('access to / path');
    res.send("hello world !");
});