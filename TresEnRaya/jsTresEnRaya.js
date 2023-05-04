
/*let jugador = 'X';
let tablerillo = ['', '', '', '', '', '', '', '', ''];
// Funcion para cambiar el colorcete del div si el puntero esta encima 

function encima(id) {
    // Esto es para modificiar algun elemento (id) del html
    let elem = document.getElementById(id)
    elem.style.background = "green";
}

// Funcion para cambiar el color al salir 

function salir(id) {
    let elem = document.getElementById(id)
    elem.style.background = "white";

}

// colocar marca x u o 
function colocar(id) {
    let elem = document.getElementById(id);
    // estilo de color a lo que tu quieras escribir 
    elem.innerHTML = "<p style=' color:pink;'><b>" + jugador + "</b></p>";
    // tablero[id] seria las ids del tablero que he creado 
    tablero[id] = jugador;

    // aqui verificamos el ganador 

if (winner()) {
    alert(`El jugador mas loco de la loqueria ha sido ${jugador}.`);
    return;
}

jugador = jugador == 'X' ? 'O' : 'X';
}

function winner() {
    const combinacionesGanadoras = [['p1', 'p2', 'p3'],
    ['p4', 'p5', 'p6'],
    ['p7', 'p8', 'p9'],
    ['p1', 'p4', 'p7'],
    ['p2', 'p5', 'p8'],
    ['p3', 'p6', 'p9'],
    ['p1', 'p5', 'p9'],
    ['p3', 'p5', 'p7']
    ];

    //for para recorrer esas combinaciones 

    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];

        if (tablerillo[a] == tablerillo[b] && tablerillo[b] == tablerillo[c] && tablerillo[a]
            != '') {
            return tablerillo[a];
        }

    }
    return null;
}

*/
let turn = true;
const botonlista = document.querySelectorAll('button');
const moverArray = new Array(9).fill(null);

function ganador(i, j, k) {
    if (moverArray[i] == moverArray[j] && moverArray[k] == moverArray[j] && moverArray[i] != null) {
        return true;
    }
    return false;
}

botonlista.forEach((btn, index) => {
    btn.addEventListener('click', event => {
        event.target.textContent = turn ? 'X' : 'O';
        moverArray[index] = turn ? 'X' : 'O';
        if (ganador(0, 1, 2) ||
            ganador(3, 4, 5) ||
            ganador(6, 7, 8) ||
            ganador(0, 3, 6) ||
            ganador(1, 4, 7) ||
            ganador(2, 5, 8) ||
            ganador(0, 4, 8) ||
            ganador(2, 4, 6)) {
            document.querySelector('#winner').textContent = `Ganó ${turn ? 'X' : 'O'}`;
        }
        turn = !turn;
    })
});
/*const botonPulsado=  (b)=>{
    const boton=b.target ;
 
    boton.style.backgroundColor='salmon';
 }
 
 document.querySelectorAll('button').forEach(obj => obj.addEventListener('click',botonPulsado));

document.getElementById("boton1").addEventListener("mouseover", function() {
   
});



document.getElementById("boton2").addEventListener("mouseover", function() {
   
});



document.getElementById("boton3").addEventListener("mouseover", function() {
   
});



document.getElementById("boton4").addEventListener("mouseover", function() {
  
});



document.getElementById("boton5").addEventListener("mouseover", function() {
   
});



document.getElementById("boton6").addEventListener("mouseover", function() {
   
});



document.getElementById("boton7").addEventListener("mouseover", function() {
   
});



document.getElementById("boton8").addEventListener("mouseover", function() {
    
});



document.getElementById("boton9").addEventListener("mouseover", function() {
    
});*/



