let counterEl = document.getElementById("count-el")
let saveCount = document.getElementById('saveCount')


let count =0

function increment(){
   count=count+1
   counterEl.innerText=count
}

function save(){
    if (count >=1) {
    let saveStr= count
saveCount.textContent+=saveStr+"-"
  
    }
}
function reset (){

count=0
counterEl.innerText=count
}