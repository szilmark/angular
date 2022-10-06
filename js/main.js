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
    /* kiválasztás többféleképpen:
    elem: "tag"
    osztály: ".osztaly"
    ha több osztálya is van az tagnak: "nav[class~='navbar']"
    ha azzal az osztállyal kezdődik: "nav[class|='navbar']"    
    ha azzal az osztállyal kezdődik (szórészlet): "nav[class^  
    ha azzal az osztállyal végződik: "nav[class$='nav']"    
    id: "#id"
    valamin pld.tagen belül "tag .class"
    tulajdonság: " a[href='#'] " vagy " [data-toggle='collapse'] "
    tulajdonságát megváltoztatni _q("a").onclick = function (){ alert ("ez itt");}
    amikor felette van az egér: "a:hover"
    */
 }

function showProfile(){
    var div = document.querySelector(".profile-div");
    if (div.classList.contains("show"))
        div.classList.remove("show");
    else
        div.classList.add("show");
}