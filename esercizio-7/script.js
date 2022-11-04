/*
da implementare il passaggio dei dati al server e il salvataggio dei dati a db
*/

let button = document.getElementById('button-submit')
let csvFile= document.getElementById('csv-file')


button.addEventListener("click", function(e){
    
    e.preventDefault()
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);
        document.write(JSON.stringify(data));
    };

    reader.readAsText(input);
})




function csvToArray(str, delimiter = ",") {

    
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);


    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });
    
      // return the array
      return arr;
}