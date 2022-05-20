let width = 0;
let circles = document.querySelectorAll(".circle")
let currentActive = 1

//Next
document.getElementById("next").addEventListener("click",() => {
    if (currentActive != 4) {
        circles[currentActive].classList.add("active");
        currentActive++;
    }

    if(width != 99) {
        width+=33
        changeProgress(width);
    }
})

//Previous
document.getElementById("prev").addEventListener("click", ()=> {
   if (currentActive != 1) {
       currentActive--;
       circles[currentActive].classList.remove("active")
   }


    if(width != 0) {
        width-=33
        changeProgress(width);
     }
})
function changeProgress(widthSize) {    
document.querySelector(".progress").style.width = `${widthSize}%`
}


