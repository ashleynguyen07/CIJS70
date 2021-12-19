

function addTable() {

    rn = window.prompt("Input number of rows", 1);
    cn = window.prompt("Input number of columns",1);

    var myTableDiv = document.getElementById("myTable");

    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < parseInt(rn, 10); i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < parseInt(cn, 10); j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode("text"));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
addTable();

