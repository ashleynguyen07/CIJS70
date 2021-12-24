
// Exercise 1
let num = Number(prompt("Enter a number from 4 to 20"));

let arr =[]

let findEven = () => {
  if(num > 4){
      for(let i = 4 ; i < num ; i++){
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
  }
    
}
findEven()
console.log(arr)

// Exercise 2
document.getElementById("myID").addEventListener("mouseover", function() {
    document.getElementById("myID").style.background = "green";
});

document.getElementById("myID").addEventListener("mouseout", function() {
    document.getElementById("myID").style.background = "red";
})

// Exercise 3

let makeTriangle = () => {
    let toPrint = "";
    let rowCount = 5;
  
    for (let row = 1; row <= rowCount; row++) {
      for (let numOne = 1; numOne <= row; numOne++)
        toPrint += "1";
  
      toPrint += "<br>";
    }
    document.getElementById("outputNumber").innerHTML = toPrint
  }
  
  makeTriangle();