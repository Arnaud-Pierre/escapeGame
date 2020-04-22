
const messageWin = document.querySelector(".messageWin")
const messageLose = document.querySelector(".messageLose")
const messageKey = document.querySelector(".messagekey")
const messageCorkscrew = document.querySelector(".messageCorkscrew")
const salon = document.querySelector(".salon")
const kitchen = document.querySelector(".cuisine")
const room1 = document.querySelector(".room1")
const room2 = document.querySelector(".room2")


const vase = document.querySelector(".vase").onclick = function(){
    salon.src = "imagesSalon/salonvase.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const tiroir1 = document.querySelector(".tiroir1").onclick = function(){
    salon.src = "imagesSalon/salontiroirhaut.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);

}

const tiroir2 = document.querySelector(".tiroir2").onclick = function(){
    salon.src = "imagesSalon/salontiroirbas.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);

}

const cadre = document.querySelector(".cadre").onclick = function(){
    salon.src = "imagesSalon/saloncadre.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);

}

const coussin = document.querySelector(".coussin").onclick = function(){
    let coussin = document.querySelector(".coussin")
    salon.src = "imagesSalon/saloncoussin.svg";
    coussin.style.display = "none"
    let key = document.querySelector(".key")
    key.style.display = "block";
    key.onclick = function(){
    salon.src = "imagesSalon/salonsansclef.svg"
    key.style.display = "none"
    const keys = 1
    console.log(keys)
    const theDoor = document.querySelector(".theDoor")
    theDoor.style.display = "block"
    theDoor.onclick = function (){
    messageWin.style.display = "block"
    room1.style.display = "none"
    setTimeout(function(){messageWin.style.display ="none";},1500);
    setTimeout(function(){room2.style.display ="block";},1500);
    }

    }
}

/* room 2 */

const freeze = document.querySelector(".frigoBas").onclick = function(){
    kitchen.src = "imagesCuisine/frigo.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);

}

const freezekey = document.querySelector(".frigoBasClef").onclick = function(){
    kitchen.src = "imagesCuisine/frigoSansClef.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);

}


const drawerMiddle = document.querySelector(".tiroirMilieu").onclick = function(){
    kitchen.src = "imagesCuisine/tiroirDuMilieu.svg";
    let drawerMiddle = document.querySelector(".tiroirMilieu")
    drawerMiddle.style.display = "none"
    const corkscreew = document.querySelector(".tirebouchon").onclick = function(){
        kitchen.src = 'imagesCuisine/tiroirMilieuSansTB.svg'
        let corkscreew = document.querySelector(".tirebouchon")
        corkscreew.style.display = "none" 
        let bottleClosed = document.querySelector(".bottleClosed")
        bottleClosed.style.display = "none"
        let bottle = document.querySelector(".bouteille")
        bottle.style.display = "block"

    }

}

const bottle = document.querySelector(".bouteille").onclick = function(){
        kitchen.src = "imagesCuisine/bouteilleBouchon.svg";
        let bottle = document.querySelector(".bouteille")
        bottle.style.display = "none"
        let bottleKey = document.querySelector(".bouteilleClef")
        bottleKey.style.display = "block"
}

const bottleKey = document.querySelector(".bouteilleClef").onclick = function(){
    kitchen.src = "imagesCuisine/clefBouteille.svg";
    let withKey = document.getElementById("withKey")
    withKey.style.display = "none"
    let plate = document.querySelector(".assiete")
    plate.style.display = "none"
    let drawerDown = document.querySelector(".tiroirBas")
    drawerDown.style.display = "none"
    let drawerUp = document.querySelector(".tiroirHaut")
    drawerUp.style.display = "none"
    let tap = document.querySelector(".robinet")
    tap.style.display = "none"
    let door = document.querySelector(".door2")
    door.style.display = "block"
    let doorClosed = document.querySelector(".doorClosed")
    doorClosed.style.display = "none"

}


const door = document.querySelector(".door2").onclick = function(){
        messageWin.style.display = "block"
        room2.style.display = "none"
        kitchen.src = "imagesCuisine/assiette.svg"
    setTimeout(function(){messageWin.style.display ="none";},1500);
    setTimeout(function(){room3.style.display ="block";},1300);
}


const plate = document.querySelector(".assiete").onclick = function(){
    kitchen.src = "imagesCuisine/assiette.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const plateKey = document.querySelector(".assieteClef").onclick = function(){
    kitchen.src = "imagesCuisine/AssietteClef.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
    }

const drawerDown = document.querySelector(".tiroirBas").onclick = function(){
    kitchen.src = "imagesCuisine/tiroirBas.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const drawerDownKey = document.querySelector(".tiroirBasClef").onclick = function(){
    kitchen.src = "imagesCuisine/tiroirBasClef.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const drawerUp = document.querySelector(".tiroirHaut").onclick = function(){
    kitchen.src = "imagesCuisine/tiroirHaut.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const drawerUpKey = document.querySelector(".tiroirHautClef").onclick = function(){
    kitchen.src = "imagesCuisine/tiroirHautClef.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const tap = document.querySelector(".robinet").onclick = function(){
    kitchen.src = "imagesCuisine/robinet.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const tapKey = document.querySelector(".robinetClef").onclick = function(){
    kitchen.src = "imagesCuisine/robinetKey.svg";
    messageLose.style.display = "block"
    setTimeout(function(){messageLose.style.display="none";},600);
}

const doorClosed = document.querySelector(".doorClosed").onclick = function(){

    messageKey.style.display = "block"
    setTimeout(function(){messageKey.style.display="none";},600);
}


const bottleClosed = document.querySelector(".bottleClosed").onclick = function(){

    messageCorkscrew.style.display = "block"
    setTimeout(function(){messageCorkscrew.style.display="none";},600);
}

