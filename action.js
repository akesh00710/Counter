let count=0;
let button1=document.getElementById("add");
let button2=document.getElementById("sub");
button1.addEventListener("click",function(){
    count++;
    document.getElementById("count").textContent=count;
})
button2.addEventListener("click",function(){
    count--;
    document.getElementById("count").textContent=count;
})

let button3=document.getElementById("reset");
button3.addEventListener("click",function(){
    count=0;
    document.getElementById("count").textContent=count;
})



