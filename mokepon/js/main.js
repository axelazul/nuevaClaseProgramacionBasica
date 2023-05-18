const sectionSelecionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");
sectionReiniciar.style.display = "none";  

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

function iniciarJuego() {    
    sectionSelecionarAtaque.style.display = "none";
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonFuego.addEventListener("click", ataqueFuego);    
    botonAgua.addEventListener("click", ataqueAgua);    
    botonTierra.addEventListener("click", ataqueTierra);    
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {  
    sectionSeleccionarMascota.style.display = "none";    
    sectionSelecionarAtaque.style.display = "flex";   
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge ";
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo ";
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya ";
    } else {
        alert("ELIGE TU MASCOTA!!");
        }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo (){
        let mascotaAleatoria = aleatorio(1, 3);
        if (mascotaAleatoria == 1){
            spanMascotaEnemigo.innerHTML = "Hipodoge ";
        } else if (mascotaAleatoria == 2){
            spanMascotaEnemigo.innerHTML = "Capipepo ";
        } else if ( mascotaAleatoria == 3){
            spanMascotaEnemigo.innerHTML = "Ratigueya ";
    }
}

function ataqueFuego(){
        ataqueJugador = "FUEGO 🔥";
        ataqueAleatorioEnemigo();
}

function ataqueAgua(){
        ataqueJugador = "AGUA 💧";
        ataqueAleatorioEnemigo();
}

function ataqueTierra(){
        ataqueJugador = "TIERRA 🌱";
        ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1, 3)
        if (ataqueAleatorio == 1 ){
            ataqueEnemigo = "FUEGO 🔥";
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = "AGUA 💧";
        } else if ( ataqueAleatorio == 3){
            ataqueEnemigo = "TIERRA 🌱";
        }
        combate();
}

function combate (){
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
        let notificacion = document.createElement("p");
        let nuevoAtaqueDelJugador = document.createElement("p");
        let nuevoAtaqueDelEnemigo = document.createElement("p");

        sectionMensajes.innerHTML = resultado;
        nuevoAtaqueDelJugador = ataquesDelJugador;
        nuevoAtaqueDelEnemigo = ataquesDelEnemigo;

        ataquesDelJugador.appendChild(notificacion);
        ataquesDelEnemigo.appendChild(notificacion);
}

function crearMensajeFinal (resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal;    
    botonFuego.disabled = true    
    botonAgua.disabled = true    
    botonTierra.disabled = true    
    sectionReiniciar.style.display = "block";
}

function reiniciarJuego(){
    location.reload() // para refrescar la pagina y reiniciar los procesos 
}

function  aleatorio (min, max){
    return Math.floor(Math.random()* (max-min +1) + min);
}

window.addEventListener("load", iniciarJuego); //ESTA LINEA AYUDA A QUE AUNQUE EL LLAMADO SCRIPT DE HTML ESTE AL PRINCIPIO, SE PUEDA CARGAR TODA DE LA PAGINA Y SE EJECUTE DE  BUENA MANERA EL SCRIPT SIN LA NECESIDAD DE COLOCARLO ABAJO EN EL HTML//