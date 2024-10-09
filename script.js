let isOpen = false;
let btn = document.querySelector(".switch");
let bulbTop = document.querySelector(".bulb-top")
let bulbBottom = document.querySelector(".bulb-bottom")

btn.addEventListener("click", function(){
    
    if(isOpen){
        btn.classList.remove("on");
        bulbTop.classList.remove("bulbOn");
        bulbBottom.classList.remove("bulbOn");
    } else {
        btn.classList.add("on");
        bulbTop.classList.add("bulbOn");
        bulbBottom.classList.add("bulbOn");
    }

    isOpen = !isOpen;

})