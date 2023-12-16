const Reader = require("./Reader.js")
const Processor = require("./Processor.js")
const Table = require("./Table.js")



async function main(){
    try{
        var dados = await Reader.Read("./Pasta1.csv")
        var dadosProcessados = await Processor.Process(dados)
        var usuarios = new Table(dadosProcessados)
        
        console.log(usuarios.RowCount)
        console.log(usuarios.header)
        console.log(dadosProcessados)
    }catch(err){
        console.error(err)
    }


}
main()

console.log("Enviado")