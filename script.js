document.getElementById("claim").addEventListener("click",function(){
    var firstName=document.getElementById("first-name");
    if(firstName.innerHTML=="")
        document.querySelector("first-error").innerHTML="First Name cannot be empty";


});