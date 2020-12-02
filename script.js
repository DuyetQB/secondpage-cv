
document.addEventListener("DOMContentLoaded" , function(){
    let icon = document.querySelector(".small-icon");

    let  nav = document.querySelector(".small-nav");
    let current = "click1";
    icon.onclick = function(){
        if(current == "click1"){
            this.innerHTML = "<i class = 'fas fa-stream'></i>";

            nav.style.display = "block";
            current = "click2";
        }
        else if(current == "click2"){

            this.innerHTML = "<i class= 'fas fa-bars'></i>";
            nav.style.display = "none";
            current = "click1";
        }
    }
},false)
 
 

