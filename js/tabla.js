function tabla(){
//Declaración de variables
var nCol = document.getElementById("id_col").value;
var nRow = document.getElementById("id_row").value;    
//Total de columnas y filas
var total = nCol*nRow;
//Generación de tabla ciclo for 
document.write("<table border= '2'>");
//for filas
for (var x = 0; x<nRow; x++){
    document.write("<tr>");
    //for columnas
    for(var y = 0; y<nCol; y++){
        document.write("<td>");
        document.write("•");
        total--;
        //finaliza col
        document.write("</td>")
    }
    //finaliza row
    document.write("</tr>");
}
document.write("</table>");
}



