var pdf = require("pdf-creator-node");


class ToPdf {
  static async Convert(html) {
    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Gustavo da Silva</div>'
        },
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };
    var users = [
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
    ];
    var document = {
      html: html,
      data: {
        users: users,
      },
      path: "./"+Date.now()+".pdf",
      type: "",
    };
   
    try {
      await pdf
      .create(document, options)
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

module.exports = ToPdf;
