const text = document.getElementById("element");

function changeSmall(){
    text.classList.remove("middle");
    text.classList.remove("big");
    text.classList.add("small");
}


function changeMiddle(){
    text.classList.remove("small");
    text.classList.remove("big");
    text.classList.add("middle");
}


function changeBig(){
    text.classList.remove("small");
    text.classList.remove("middle");
    text.classList.add("big")
}
