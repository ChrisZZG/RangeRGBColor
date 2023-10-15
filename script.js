
//Obtengo lo que ingresa por Inputs
let inputRed = document.getElementById('red');
let inputGreen = document.getElementById('green');
let inputBlue = document.getElementById('blue');


//Obtengo lo que devo escribir en cada color
let textRed = document.getElementById('text-red');
let textGreen = document.getElementById('text-green');
let textBlue = document.getElementById('text-blue');


//Variables Auxiliares para definir color Inicial 
//con el que arranco

let colorRed = inputRed.value;
let colorGreen = inputGreen.value;
let colorBlue = inputBlue.value;


//Reemplazo lo que se deve escribir con el valor del 
//color correspondiente a cada rango, que entra por el
//input de tipo rango

textRed.innerText = colorRed;
textGreen.innerText = colorGreen;
textBlue.innerText = colorBlue;

//Defino la funcion con los parametros que tomara para
//actualizar el color de fondo
function actualizarColor(colorRed, colorGreen, colorBlue) {
    let colorRGB = `rgba(${colorRed}, ${colorGreen}, ${colorBlue}`;
    document.body.style.backgroundColor = colorRGB;
    //Defino el color del texto como el color puro de
    //su valor y cero para los demas
    textRed.style.color = `rgba(${colorRed}, ${0}, ${0}`;
    textGreen.style.color = `rgba(${0}, ${colorGreen}, ${0}`;
    textBlue.style.color = `rgba(${0}, ${0}, ${colorBlue}`;
}

//Escucho a cada imput para poder tomar esos valores y 
//pasarselos a la funcion y que arme el RGB total

inputRed.addEventListener('change', (e) => {
    colorRed = e.target.value;
    textRed.innerText = colorRed;
    actualizarColor(colorRed, colorGreen, colorBlue);
    
});

inputGreen.addEventListener('change', (e) => {
    colorGreen = e.target.value;
    textGreen.innerText = colorGreen;
    actualizarColor(colorRed, colorGreen, colorBlue);
});

inputBlue.addEventListener('change', (e) => {
    colorBlue = e.target.value;
    textBlue.innerText = colorBlue;
    actualizarColor(colorRed, colorBlue, colorGreen);
});






