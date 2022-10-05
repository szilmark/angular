function bigSection( ){
    var section1 = document.querySelector("#section1");
    section1.classList.add("big");
}

document.querySelector("h1").innerHTML = "Hello ITfactory";

//kép forrásának módosítása
function changeURL(){
    document.querySelector("img").src = "https://s.24.hu/app/uploads/sites/11/2018/05/thinkstockphotos-521697453-e1526731524153.jpg";
}
//Stílus módosítása
function changeStyle(){
    document.querySelector("img").style.width = "40px";
}

//adatok ellenőrzése
function validate(){
    // Az input mező kiválasztása
    var input = document.querySelector(".input-validate");
    var errorP = document.querySelector(".no-validate");
    
    // Az input mező értékének kiolvasása
    var inputValue = input.value;
    if ( inputValue < 6 || inputValue > 20 ){
        console.log("ez itt az:"+inputValue);
        errorP.innerHTML="Nem megfelelő";
    }
    
    else
        errorP.innerHTML="Megfelelő";
        
}

// Elemek kiválasztása
// @param selector: string az elemet kiválasztó szelektor.
function _q( selector ){
    //elemek kiválasztása
    var elements = document.querySelectorAll(selector);
    return elements;
}