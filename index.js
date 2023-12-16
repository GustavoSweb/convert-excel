const Reader = require("./Reader.js")
const Processor = require("./Processor.js")
const Table = require("./Table.js")
const HtmlParser = require("./HtmlParser.js")
const Writer = require("./Writer.js")

async function main(){
    try{
        var dados = await Reader.Read("./Pasta1.csv")
        var dadosProcessados = await Processor.Process(dados)
        var usersTable = new Table(dadosProcessados)
        var html = await HtmlParser.Paser(usersTable)

        Writer.Write("Tabela.html",html)
    
    }catch(err){
        console.error(err)
    }


}
main()

console.log("Enviado")