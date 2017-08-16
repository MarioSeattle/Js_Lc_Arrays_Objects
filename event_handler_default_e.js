/**
 * Created by Mgomez on 8/16/17.
 */

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");


//If not JS on browser add or remove the hide class
CTA.classList.remove("hide");
ALERT.classList.add("hide");

//added e to prevent default behaivor
function reveal(e) {

    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");

}

//Event handler to trigger script, no () so that function loads when needed it !

CTA.onclick = reveal;





