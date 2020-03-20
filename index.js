const express = require("express"); // require = va chercher du code et met le 'ici'
const fs = require("fs"); // Appel les fichiers de son système
const app = express();
app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.get("/", (req, res) => {
    console.log("access to / path");
    const html = fs
        .readFileSync("./src/index.html"); //Lire le fichier de manière synchrone + chemin du fichier
    console.log(typeof html, html); // Transformer en objet qui se télécharge et ne retransmet pas le texte : on a un fichier  binaire au lieu d'une chaine de caractère
    res.send(html);
});
app.get("/about", (req, res) => {
    res.send("about"); // Rajouter la chaine de caractère about et c'est donc la réponse
});