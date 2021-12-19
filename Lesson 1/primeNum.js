let form = document.getElementById("form");

primeNumber = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n-1; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};
form.onsubmit = (result) => {
    result.preventDefault(); // chặn thông tin trang web reload để có thể lấy được thông tin từ user

    let num1 = Number(form.num1.value)
    let num2 = Number(form.num2.value)

    for (let i = num1; i < num2; i++)  {
        if(primeNumber(i)) {
            document.getElementById("Result").innerHTML += i + " ; ";
        }
    }
}
