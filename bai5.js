var inputn5El=document.getElementById("inputn5")
var i5=1
function bai5(){
    var inputn5=inputn5El.value*1
   console.log(i5);
   for( i5=2;i5<=inputn5;i5++){
       if(i5==2){
           console.log(i5);
       }else if(i5%2==0){
           console.log("no");
       }else{
        for (var k5 = 3; k5 < i5-1; k5+=2)
        {
            
            if (i5 % k5 == 0){
                // console.log("no");
            }else{
                console.log(i5);
            }
        }
       }

       
       
}}
    
