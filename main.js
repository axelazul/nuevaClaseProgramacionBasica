function  aleatorio (min, max){
    return Math.floor(Math.random()* (max-min +1) + min)
}
// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0;
let pc = aleatorio(1,3);
jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera :");
//alert("Eegiste: " + jugador);
if (jugador == 1){
    alert("Elegiste Rock");
} else if ( jugador == 2) {
    alert("Elegiste Paper");
} else if (jugador == 3){
    alert("Elegiste Sissors");
} else {
    alert ("Elegiste mal");
}
if (pc == 1){
    alert("PC elige Rock");
} else if ( pc == 2) {
    alert("PC elige Paper");
} else if (pc == 3){
    alert("PC elige Sissors");
} else {
    alert ("PC eligió mal");
}
// COMBATE
if ( pc == jugador){
    alert("Empate");
} else if ( jugador == 1 && pc == 3){
    alert("Ganaste!!");
} else if ( jugador == 2 && pc == 1){
    alert("Ganaste!!");
} else if ( jugador == 3 && pc == 2 ){
    alert("Ganaste!!");
} else {
    alert("PERDISTE!!");
}