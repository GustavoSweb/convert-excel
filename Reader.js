const fs = require("node:fs/promises")

class Reader{
    static async Read(path){
        try{
            var dados = await fs.readFile(path, {encoding:"UTF-8"})
            
            return dados
        }catch(err){
            console.error(err)
        }
    }
}

module.exports = Reader