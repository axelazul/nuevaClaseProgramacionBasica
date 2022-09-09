function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
   let inputHipodoge = document.getElementById("hipodoge");
   let inputCapipepo = document.getElementById("capipepo");
   let inputRatigueya = document.getElementById("ratigueya");
   let inputTucapalma = document.getElementById("tucapalma");
   let inputPydos = document.getElementById("pydos");
   let spanMascotaJugador = document.getElementById("mascota-jugador");
   
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge ";
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo ";
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya ";
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma ";
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos ";
    } else {
        alert("ELIGE TU MASCOTA!!");
        
    }
}
window.addEventListener("load", iniciarJuego); //ESTA LINEA AYUDA A QUE AUNQUE EL LLAMADO SCRIPT DE HTML ESTE AL PRINCIPIO, SE PUEDA CARGAR TODA DE LA PAGINA Y SE EJECUTE DE  BUENA MANERA EL SCRIPT SIN LA NECESIDAD DE COLOCARLO ABAJO EN EL HTML//
