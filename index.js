const fs = require("node:fs/promises");


// fs.writeFileSync("gustavo.txt", "Ola")
async function start(nome){
    try{
        const test = await fs.readFile("./usuario.json", {encoding: "UTF-8"})
        var conteudoObject = JSON.parse(test)
        conteudoObject.nome = nome
        fs.writeFile("usuario.json", JSON.stringify(conteudoObject))
        return
    }catch(err){
        console.error(err)
    }
}
start("EU")