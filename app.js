window.addEventListener("load", init);

function ID(e) {return document.getElementById(e);}
function CL(e) {return document.getElementsByClassName(e);}
function $(e) {return document.querySelector(e);}
function $a(e) {return document.querySelectorAll(e);}

let i = 0;
var txt = "";

let a = 0;
var szamolas = [];

function szamBeiras() {
    if(szamolas.length != 2) {
        $(".kijelzo").innerHTML += event.target.innerHTML;
        a = a + parseFloat(event.target.innerHTML);
        szamolas.push(a);
        // szamolas.push(parseFloat(event.target.innerHTML));
    }
}

function muveletBeiras() {
    if(event.target.innerHTML == "C") {
        $(".kijelzo").innerHTML = "";
        a = 0;
        szamolas = [];
    }
    else if(event.target.innerHTML == "=") {
        $(".kijelzo").innerHTML = a;
        a = 0;
        szamolas = [];
    }
    else {
        if(event.target.innerHTML == "*") {
            $(".kijelzo").innerHTML += event.target.innerHTML;
        }
        /* $(".kijelzo").innerHTML += event.target.innerHTML;
        szamolas = a.split(event.target.innerHTML); */
    }
}

// MAIN
function init() {
    for(i = 0; i < 10; i++) txt = txt + "<button></button>";
    $(".szamok").innerHTML = txt;

    var szamTomb = $a(".szamok button");
    for(i = 1; i <= 9; i++) {szamTomb[i - 1].id = "szam" + i; szamTomb[i - 1].innerHTML = i;}
    szamTomb[szamTomb.length - 1].id = "szam" + 0;
    szamTomb[szamTomb.length - 1].innerHTML = 0;
    
    for(i = 0; i < szamTomb.length; i++) {
        szamTomb[i].addEventListener("click", szamBeiras);
    } 

    muveletTomb = $a(".muvjelek button");
    for(i = 0; i < muveletTomb.length; i++) muveletTomb[i].addEventListener("click", muveletBeiras);


}