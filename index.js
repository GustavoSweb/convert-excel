const Reader = require("./Reader.js")


Reader.Read("./Pasta1.csv").then((dados)=>{
    console.log(dados)
}).catch((err)=>{
    console.error(err)
})

console.log("Enviado")