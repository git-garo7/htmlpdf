var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var leitor = new Reader();
var escritor = new Writer();
var PdfWriter = require("./PdfWriter"); 

 
async function main(){
    var dados  = await leitor.Read("./users.csv");//arquivo EXCELL pra transformar 

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
    
    
    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html",html);//faz o aruivo HTML
    PdfWriter.WritePDF(Date.now() + ".PDF",html);//faz o arquivo PDF
}

main();
