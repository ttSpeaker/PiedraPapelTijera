function jugadaMaquina() {
    var indice = Math.floor((Math.random() * 3 + 1));
    switch (indice) {
        case 1:
            return 'piedra';
        case 2:
            return 'papel';
        case 3:
            return 'tijera';
    }
}
function ganador(ganador) {
    $('#ganador').html(ganador);
}
function chequearPapel(maquina) {
    switch (maquina) {
        case 'piedra':
            ganador('GANASTE!');
            break;
        case 'papel':
            ganador('EMPATE');
            break;
        case 'tijera':
            ganador('PERDISTE!');
            break;
    }
}
function chequearPiedra(maquina) {
    switch (maquina) {
        case 'piedra':
            ganador('EMPATE');
            break;
        case 'papel':
            ganador('PERDISTE!');
            break;
        case 'tijera':
            ganador('GANASTE');
            break;
    }
}
function chequearTijera(maquina) {
    switch (maquina) {
        case 'piedra':
            ganador('PERDISTE!');
            break;
        case 'papel':
            ganador('GANASTE!');
            break;
        case 'tijera':
            ganador('EMPATE ');
            break;
    }
}
function chequearGanador(usuario, maquina) {
    switch (usuario) {
        case 'piedra':
            chequearPiedra(maquina);
            break;
        case 'papel':
            chequearPapel(maquina);
            break;
        case 'tijera':
            chequearTijera(maquina);
            break;
    }
}
function mostrarJugada(jugador, jugada) {
    switch (jugada) {
        case 'piedra':
            $('#' + jugador + ' .botonTablero').html('<img src="img/noun_Hand_147847.png" alt="PIEDRA"></img>');
            break;
        case 'papel':
            $('#' + jugador + ' .botonTablero').html('<img src="img/noun_Hand_147844.png" alt="PAPEL"></img>');
            break;
        case 'tijera':
            $('#' + jugador + ' .botonTablero').html('<img src="img/noun_Peace_147845.png" alt="TIJERA"></img>');
            break;
    }

}
function jugadaUsuario(opcion) {
    var usuario = opcion;
    mostrarJugada('jugadaUsuario', usuario);
    var maquina = jugadaMaquina();
    mostrarJugada('maquina', maquina);
    chequearGanador(usuario, maquina);
}

$(document).ready(function () {
    $("#piedra").click(function () { jugadaUsuario('piedra'); });
    $("#papel").click(function () { jugadaUsuario('papel'); });
    $("#tijera").click(function () { jugadaUsuario('tijera'); });
});