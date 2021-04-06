var pdf =  require("html-pdf");

class PdfWriter{
    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=>{});
    }//toFile faz pdf pra arquivo
}

module.exports = PdfWriter;