var inputn3El=document.getElementById("inputn3")
function bai3(){
    var inputn3=inputn3El.value*1
var mult3=1

    for(var n3=1;n3<=inputn3;n3++){
        mult3=mult3*n3
    }
    document.getElementById("ketqua3").innerText=inputn3+"!="+mult3
}