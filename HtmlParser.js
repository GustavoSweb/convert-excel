const ejs = require("ejs")

class HtmlParser{
     static async Paser(table){
        const html = await ejs.renderFile("./index.ejs", {
            header:table.header,
            rows:table.rows
        })
        return html
    }
}

module.exports = HtmlParser