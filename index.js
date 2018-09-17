const express = require("express");
const axios = require("axios");

const app = express();

app.get("/proxy/:url", (req, res) => {
    const url = decodeURIComponent(req.params.url);
    const respond = ares => {
        res.status(ares.status).send(ares.data);
    };
    axios({
            url
        }).then(respond)
        .catch(result => respond(result.response));
});

app.listen(12345);