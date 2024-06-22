const b3=document.getElementById("bn");
const b5=document.getElementById("tn");
const b7=document.getElementById("rn");
const ro=document.querySelector(".round");
const but=document.querySelector(".thi")
const st=document.querySelector("#sto");
const pa=document.querySelector("#pap");
const sci=document.querySelector("#sci");
const im=document.querySelector(".iw");
const wq=document.querySelector(".wo");
const nx=document.querySelector(".nex")
let p1=0;
let comp=0;
const pla1=document.getElementById("p1");
const comp1=document.getElementById("p2");
const sw=document.getElementById("play");

var x=1;
var y=0;
function start(){
    document.querySelector(".thi").style.display="block";
    document.querySelector(".plq").style.display="none";
    document.querySelector("#res").style.display="block";
    
}

function restart(){
    document.querySelector(".plq").style.display="block";
    document.querySelector("#res").style.display="none";
    location.reload();
}


function play(input){
     y=input;
    console.log(but.style.display="none");
    ro.innerHTML=`ROUND ${1}`;
    document.querySelector(".bre").style.display="block";
    document.querySelector(".name").style.display="flex";
    

}
 var d="";
function compchoice(){
    let options=["st","pa","sci"];
    let e=Math.floor(Math.random()*3)
    d= options[e];
    console.log(e);
    
}

function addst(input){
    im.style.display="flex";
    document.getElementById("you").src=`${input}.png`;
    compchoice()
    document.getElementById("compi").src=`${d}.png`;
    if(input==d){
       pla1.innerText=p1;
       comp1.innerText=comp
       wq.style.display="block";
       wq.innerText="you draw this round";
   }
   else if(input=="st"){
    if(d=="pa"){
        comp++;
        comp1.innerText=comp;
        wq.style.display="block";
       wq.innerText="you lose this round";

    }
    else if(d=="sci"){
        p1++;
        pla1.innerText=p1;
        wq.style.display="block";
       wq.innerText="you won this round";


    }}
    else if(input=="pa"){
        if(d=="sci"){
            comp++;
            comp1.innerText= comp;
            wq.style.display="block";
           wq.innerText="you lose this round";
    
        }
        else if(d=="st"){
            p1++;
            pla1.innerText=p1;
            wq.style.display="block";
           wq.innerText="you won this round";
    
}}
else if(input=="sci"){
    if(d=="st"){
        comp++;
        comp1.innerText=comp;
        wq.style.display="block";
       wq.innerText="you lose this round";

    }
    else if(d=="pa"){
        p1++;
        pla1.innerText=p1;
        wq.style.display="block";
       wq.innerText="you won this round";


}}
document.querySelector(".bre").style.display="none";
document.querySelector(".score").style.display="block";
document.querySelector(".nex").style.display="block";
 }

function ret(){
    if(x<y){
        x++;
        ro.innerHTML=`ROUND ${x}`;
        document.querySelector(".bre").style.display="block";
        document.querySelector(".score").style.display="none";
        document.querySelector(".nex").style.display="none";
        wq.style.display="none";
        document.querySelector(".iw").style.display="none";

    }
    else{
        
        document.querySelector(".nex").style.display="none";
        document.querySelector(".score").innerHTML=`final-score  <button id="p1">${p1}</button>:<button id="p2">${comp}</button>`
        if(p1>comp){
            document.querySelector(".la").style.display="block";
        }
        else if(p1==comp){
            document.querySelector(".la").style.display="block";
            document.querySelector(".la").innerHTML="You Draw this Game";
        }
        else{
            document.querySelector(".la").style.display="block";
            document.querySelector(".la").innerHTML="You Lose this Game";
        }
        document.querySelector(".fry").style.display="none";
    }
    

}




