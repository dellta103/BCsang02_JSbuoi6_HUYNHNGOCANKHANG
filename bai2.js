var n2=1
var inputx2El=document.getElementById("inputx2")
var inputn2El=document.getElementById("inputn2")
function bai2(){
    var inputx2=inputx2El.value*1
    var inputn2=inputn2El.value*1
    var sum2=0

    for(n2=1;n2<=inputn2;n2++){
    sum2=sum2+Math.pow(inputx2,n2)

    }
    document.getElementById("ketqua2").innerText="S("+inputn2+")="+sum2
    }
