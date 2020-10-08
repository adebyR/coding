const authLinks = document.getElementById('auth-panel');
const showMenu = document.getElementById('show-menu');
const closeMenu = document.getElementById('close-menu');
const caption2 = document.getElementById('caption2');
const caption1 = document.getElementById('caption1');

var hidding = true;

function showColumn(){
    if(hidding) {
        caption1.style.display ="none";
        caption2.style.display ="block";
        hidding = false;
    }else {
        caption1.style.display ="block";
        caption2.style.display ="none";
        hidding = true;(())
    }
}

function showAuth(){

    if(hidding) {

    // alert('Touched....!')
    closeMenu.style.display = "block";
    authLinks.style.display = "block";
    showMenu.style.display = "none";
    authLinks.style.transition= '2s';
    caption1.style.display ="none";
    const a = 10;
    var b = 90;
    var b = 100;
    alert(a+b)
    console.log("A + B =====>", a+b)
    hidding = false;
    }
    else {
        authLinks.style.display = "none";
        authLinks.style.transition= '2s';
        hidding = true;
        closeMenu.style.display = "none";
        showMenu.style.display = "block";
        caption1.style.display ="block";

    }
}

// function hideAuth(){
//     authLinks.style.display="none";
//     authLinks.style.transition= '2s';
// }
