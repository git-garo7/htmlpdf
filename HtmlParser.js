var ejs = require("ejs"); 

class HtmlParser{ 
    static async Parse(table){
      return await ejs.renderFile("./table.ejs",{header:table.header,rows:table.rows})
    }//render File processa a informação do arquivo indicado
}//pra usar await exige async

module.exports = HtmlParser;