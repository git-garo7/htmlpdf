class Processor{

    static Process(data){
        var a = data.split("\r\n"); 
        var rows = [];
        a.forEach(row =>{
            var arr = row.split(",");
            rows.push(arr);
        });
        return rows;
       }

}//split vai dividir por linha(\n= quebra dde linha)

module.exports = Processor;