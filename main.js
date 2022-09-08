function  aleatorio (min, max){
    return Math.floor(Math.random()* (max-min +1) + min)
}

function eleccion (jugada){
    let resultado = "";
    if (jugada == 1){
        resultado = "Piedra ";
    } else if ( jugada == 2) {
        resultado = "Papel ";
    } else if (jugada == 3){
        resultado = "Tijera ";
    } else {
        resultado = "MAL ELEGIDO!!";
    }
    return resultado;
}

// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0;
let pc = aleatorio(1,3);
jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera :");
//alert("Eegiste: " + jugador);

alert("PC Elige :" + eleccion(pc));
alert("Tu Eliges :" + eleccion(jugador));

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