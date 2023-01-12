let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
    let sectionSelecionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSelecionarAtaque.style.display = "none";

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
    //let botonElectrico = document.getElementById("boton-electrico");
    //botonElectrico.addEventListener("click", ataqueElectrico);
    //let botonCursed = document.getElementById("boton-cursed");
    //botonCursed.addEventListener("click", ataqueCursed);
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "none";

    let sectionSelecionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSelecionarAtaque.style.display = "block";

   let inputHipodoge = document.getElementById("hipodoge");
   let inputCapipepo = document.getElementById("capipepo");
   let inputRatigueya = document.getElementById("ratigueya");
   //let inputTucapalma = document.getElementById("tucapalma");
   //let inputPydos = document.getElementById("pydos");
   let spanMascotaJugador = document.getElementById("mascota-jugador");
   
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge ";
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo ";
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya ";
    //} else if (inputTucapalma.checked){
        //spanMascotaJugador.innerHTML = "Tucapalma ";
    //} else if (inputPydos.checked){
       // spanMascotaJugador.innerHTML = "Pydos ";
    } else {
        alert("ELIGE TU MASCOTA!!");
        
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo (){
        let mascotaAleatoria = aleatorio(1, 3);
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

        if (mascotaAleatoria == 1){
            spanMascotaEnemigo.innerHTML = "Hipodoge ";
        } else if (mascotaAleatoria == 2){
            spanMascotaEnemigo.innerHTML = "Capipepo ";
        } else if ( mascotaAleatoria == 3){
            spanMascotaEnemigo.innerHTML = "Ratigueya ";
        //} else if ( mascotaAleatoria == 4){
          //  spanMascotaEnemigo.innerHTML = "Tucapalma ";
        //} else {
          //  spanMascotaEnemigo.innerHTML = "Pydos ";
        //}
    }
}

function ataqueFuego(){
        ataqueJugador = "FUEGO 🔥";
        //alert(ataqueJugador);
        ataqueAleatorioEnemigo();
}

function ataqueAgua(){
        ataqueJugador = "AGUA 💧";
        //alert(ataqueJugador);
        ataqueAleatorioEnemigo();
}

function ataqueTierra(){
        ataqueJugador = "TIERRA 🌱";
        //alert(ataqueJugador);
        ataqueAleatorioEnemigo();
}
//  function ataqueElectrico(){
       // ataqueJugador = "ELECTRICO ⚡";
        //alert(ataqueJugador);
       // ataqueAleatorioEnemigo();
    //}

  //  function ataqueCursed(){
    //    ataqueJugador = "CURSED ☠";
        //alert(ataqueJugador);
      //  ataqueAleatorioEnemigo();
  //}

function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1, 3)

        if (ataqueAleatorio == 1 ){
            ataqueEnemigo = "FUEGO 🔥";
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = "AGUA 💧";
        } else if ( ataqueAleatorio == 3){
            ataqueEnemigo = "TIERRA 🌱";
        //} else if ( ataqueAleatorio == 4){
          //  ataqueEnemigo = "ELECTRICO ⚡";
        //} else {
          //  ataqueEnemigo = "CURSED ☠";
        }
        combate();
}

function combate (){
        let spanVidasJugador = document.getElementById("vidas-jugador");
        let spanVidasEnemigo = document.getElementById("vidas-enemigo");

        if ( ataqueEnemigo == ataqueJugador){
            crearMensaje("EMPATE 🥱");
        } else if ( ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱"){
            crearMensaje("GANASTE!! 😎");
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        } else if ( ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥"){
            crearMensaje("GANASTE!! 😎");
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        } else if ( ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧" ){
            crearMensaje("GANASTE!! 😎");
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
         //else if ( ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "ELECTRICO ⚡" ){
           // crearMensaje("PERDISTE!! 😔");
        //} else if ( ataqueJugador == "AGUA 💧" && ataqueEnemigo == "TIERRA 🌱" ){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "CURSED ☠"){
          //  crearMensaje("PERDISTE!! 😔")
        //} else if ( ataqueJugador == "AGUA 💧" && ataqueEnemigo == "ELECTRICO ⚡"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "AGUA 💧" && ataqueEnemigo == "CURSED ☠"){
          //  crearMensaje("PERDISTE!! 😔");
        //} else if ( ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "ELECTRICO ⚡"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "ELECTRICO ⚡" && ataqueEnemigo == "FUEGO 🔥"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "ELECTRICO ⚡" && ataqueEnemigo == "AGUA 💧"){
          //  crearMensaje("PERDISTE!! 😔");
        //} else if ( ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "FUEGO 🔥"){
          //  crearMensaje("PERDISTE!! 😔");
        //} else if ( ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "CURSED ☠"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "ELECTRICO ⚡" && ataqueEnemigo == "TIERRA 🌱"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "ELECTRICO ⚡" && ataqueEnemigo == "CURSED ☠"){
          //  crearMensaje("PERDISTE!! 😔"); 
        //} else if ( ataqueJugador == "CURSED ☠" && ataqueEnemigo == "FUEGO 🔥"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "CURSED ☠" && ataqueEnemigo == "AGUA 💧"){
          //  crearMensaje("GANASTE!! 😎");
        //} else if ( ataqueJugador == "CURSED ☠" && ataqueEnemigo == "TIERRA 🌱"){
          //  crearMensaje("PERDISTE!! 😔");
        //} else if ( ataqueJugador == "CURSED ☠" && ataqueEnemigo == "ELECTRICO ⚡"){
          //  crearMensaje("GANASTE!! 😎"); 
        } else {
            crearMensaje("PERDISTE!!😔");
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }

        revisarVidas()
}
    
function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste!!");
    } else if (vidasJugador == 0){
        crearMensajeFinal("LO SIENTO, PERDISTE :'C!!");
    }
}
    
function crearMensaje (resultado){
        let sectionMensajes = document.getElementById("mensajes");
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Tu mascota atacó con " +  ataqueJugador + ", y la mascota del enemigo atacó con " + ataqueEnemigo + "- " + resultado;
        sectionMensajes.appendChild(parrafo) // sirve para crear y meter los parrafos creados, ( manipulacion del DOM )
}

function crearMensajeFinal (resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal;
    sectionMensajes.appendChild(parrafo) // sirve para crear y meter los parrafos creados, ( manipulacion del DOM )

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";


}

function reiniciarJuego(){
    location.reload() // para refrescar la pagina y reiniciar los procesos 
}

function  aleatorio (min, max){
        return Math.floor(Math.random()* (max-min +1) + min);
}

window.addEventListener("load", iniciarJuego); //ESTA LINEA AYUDA A QUE AUNQUE EL LLAMADO SCRIPT DE HTML ESTE AL PRINCIPIO, SE PUEDA CARGAR TODA DE LA PAGINA Y SE EJECUTE DE  BUENA MANERA EL SCRIPT SIN LA NECESIDAD DE COLOCARLO ABAJO EN EL HTML//