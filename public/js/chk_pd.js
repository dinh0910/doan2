function checkpd(){
    if (document.getElementById('MatKhau').value ==
            document.getElementById('XacNhanMatKhau').value) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}