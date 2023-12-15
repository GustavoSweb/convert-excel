const Reader = require("./Reader.js")
const Processor = require("./Processor.js")
(async ()=>{
    try{
        var dados = await Reader.Read("./Pasta1.csv")
        Processor.Process(dados)
    }catch(err){
        console.error(err)
    }


})()

console.log("Enviado")