const inputBox = document.getElementById('input');
const icon = document.getElementById("icon");
const msg = document.getElementById("msg");
const btn = document.getElementById('buttonSubmit');



function check(){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(inputBox.value.match(pattern)){
        location.reload(); 
    }
    else{
        inputBox.style.borderColor = "#e74c3c";
        document.querySelector(".icon").style.visibility = "visible";
        msg.style.visibility = "visible";
    }
}