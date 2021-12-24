// const btnSubmit = document.getElementById("btn-primary");
// function clickMe() {
//     console.log("My");
// }

// function clickPrimary() {
//     console.log("clickPrimary");
// }

// btnSubmit.addEventListener("click", clickMe);
// btnSubmit.addEventListener("click", clickPrimary);

// btnSubmit.addEventListener("", () => {
//     console.log("Arrow click")
// });

// // khi type trong form thì nó sẽ tạo ra 1 cái event (event là cái dữ liệu)
// // event.target: mục đích lấy event là gì. vd: event.target.value - là lấy dữ liệu từ form
// // preventDedault: chặn chuyển page khi reload
// // fText là gì?

// // muốn sử dụng module thì phải thêm type module ở script js
// // ctrl + space : ra list
// // js có stack và heap
// // js là đơn luồng (single thread), chỉ thực 1 nhiệm vụ 1 lần
// // js là bất đồng bộ (chạy lung tung), đồng bộ là chạy từng dòng
// // async callback
// // try catch: không thể try catch được với callback



// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "";
  }
  res.value += value;
}
