
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
