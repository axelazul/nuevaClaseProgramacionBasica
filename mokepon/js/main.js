function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    alert("exito!!");
}

window.addEventListener("click", iniciarJuego); //ESTA LINEA AYUDA A QUE AUNQUE EL LLAMADO SCRIPT DE HTML ESTE AL PRINCIPIO, SE PUEDA CARGAR TODA DE LA PAGINA Y SE EJECUTE DE  BUENA MANERA EL SCRIPT SIN LA NECESIDAD DE COLOCARLO ABAJO EN EL HTML//


