
let form = document.getElementById("form");

function addTable() {

    form.onsubmit = (myTable) => {
      myTable.preventDefault();

    let rn = Number(form.rn.value);
    let cn = Number(form.cn.value);

    var myTableDiv = document.getElementById("myTable");

    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < parseInt(rn, 10); i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr); // nối các row và column
  
      for (var j = 0; j < parseInt(cn, 10); j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.contentEditable = true;
        td.appendChild(document.createTextNode("text"));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  }
addTable()



