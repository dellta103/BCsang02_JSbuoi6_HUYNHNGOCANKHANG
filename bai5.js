var inputn5El=document.getElementById("inputn5")
function bai5(){
    
    var inputn5=inputn5El.value*1
    
    for(var k=1;k<=inputn5;k++){
    var flag=true

    if(k<2){
        flag=true
    }else{
        for (var i5=2;i5<k;i5++){
            if(k%i5==0){
                flag=false
                break
            }
        }   
    }
    if(flag==true){
    var h5=document.createElement("h5")

    h5.innerHTML=k

    document.body.appendChild(h5)
    } 
}
}
    
    
