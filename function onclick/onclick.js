


function clicked(){     /* this is a user fucntion which require no argument */ 
  
    document.getElementById("heading").style.color="red";
    document.getElementById("heading").style.fontSize="42px";
    document.getElementById("heading").style.transition="0.3s ease-in-out";
  
    alert(Date());
     
    
}

function clicked_revert(){
    document.getElementById("heading").style.color="black"
    document.getElementById("heading").style.fontSize=""
    document.getElementById("heading").style.transition="0.3s ease-in-out"
}




 var global=1 
function determine(){
    if((global%2)==0){
        changedfunction1()
        global=global+1
    }
    else{
        changedfunction2()
        global=global+1
    }
}













function changedfunction1(){
    document.getElementById("body-content").style.backgroundColor="white";
    document.getElementById("paragraph1").style.color="black";
    document.getElementById("paragraph2").style.color="black";
    document.getElementById("heading").style.color="black";
    document.getElementById("body-content").style.transition="0.3s ease"
    document.getElementById("button1").innerHTML="Dark Mode"
  
}










function changedfunction2(){
    document.getElementById("body-content").style.backgroundColor="#212529";
    document.getElementById("paragraph1").style.color="white";
    document.getElementById("paragraph2").style.color="white";
    document.getElementById("heading").style.color="white";
    document.getElementById("body-content").style.transition="0.3s ease"
    document.getElementById("button1").innerHTML="Light Mode"
    
}