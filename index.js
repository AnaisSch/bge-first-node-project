const express = require("express"); // require = va chercher du code et met le 'ici'
const fs = require("fs"); // Appel les fichiers de son système
const app = express();
app.listen(3000, () => {
    console.log("SERVER STARTED...");
});
app.use(express.static('./public')); // fait appel à tous les fichiers dans le dossier 'public'.
app.get('/get_text', (req, res) => {
    res.send('hello world');
})