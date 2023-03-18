var list_of_cars=["buggati","farrari","suzuki","cultus","kia","vezel"];
var text="";

for (i=0;i<list_of_cars.length;i++){
     var cars_list=document.getElementById("cars_list")
     text+="<input type='Checkbox'/>"+" "+list_of_cars[i]+"<br>"
     
}

cars_list.innerHTML=text