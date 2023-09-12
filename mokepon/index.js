const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola Cata")
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})