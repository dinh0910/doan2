let x = document.querySelectorAll(".donGia");
for (let i = 0, len = x.length; i < len; i++) {
    let num = Number(x[i].innerHTML)
            .toLocaleString('vn');
    x[i].innerHTML = num;
    x[i].classList.add("currSign");
}