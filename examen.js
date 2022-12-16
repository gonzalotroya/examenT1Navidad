/**
 * Examen de Js tarjeta de navidad
 * @author Gonzalo de Troya Hernando
 * @param elemento Obtiene el elemento que se va a mostrar
 * @param width Maximo de pixeles
 * @param diferencia La cantidad de pixeles restados
 * @param intervalID Variable que se usa para limpiar los intervalos de las funciones y las pone en 0
 */
// Obtén el elemento que quieres mostrar
var elemento = document.getElementById('saludos');
var width=100;
var diferencia=2;
var intervalID=0;
/**
 * Funcion que toma y elimina de la vision los elementos visuales que contiene la tarjeta,
 * usando setTimeout para eliminar el elemento después de 0.1 segundos para quitarlo de la vista.
 */
setTimeout(function() {
    document.getElementById("mensaje");
    mensaje.style.visibility = "hidden";
    saludos.style.display = "none";
  }, 0001); // Usa setTimeout para mostrar el elemento después de 3 segundos
/**
 * Funcion que toma y muestra los elementos visuales que contiene la tarjeta,
 * usando setTimeout para mostar el elemento después de 3 segundos.
 */
setTimeout(function() {
    document.getElementById("mensaje");
    mensaje.style.visibility = "visible";
    saludos.style.display = "flex";
    document.getElementById('saludos');
    saludos.style.transform = "rotate(-45deg)"; //Toma el elemento saludos y le cambia el estilo para que con la funcion transform rote. 
}, 3000); // 3000 milisegundos = 3 segundos

/**
 * Funcion que muestra un alert o ventana emergente que muestra un String,
 * usando setTimeout para mostar el elemento después de 2 segundos.
 */
setTimeout(function(){
    window.alert("feliz navidad");
},2000);
/**
 * Funcion que toma y elimina de la vision los elementos visuales que contiene la tarjeta,
 * usando setTimeout para eliminar el elemento después de 15 segundos para quitarlo de la vista.
 */
setTimeout(function() {
    saludos.style.display = "none";
  }, 15000); 

/**
 * Funcion que se encarga de dar efecto hover al texto.
 */
function incrementar() {
    clearInterval(intervalID);//limpia el intervalo y lo pone en 0
    setIntervalID=setInterval(expandir,10); //Pone un nuevo intervalo  que tiene el valor de la funcion expandir y le da un tiempo.

  }
  /**
 * Funcion que se encarga de dar efecto hover al texto.
 */
  function decrementar() {
    clearInterval(intervalID); //limpia el intervalo y lo pone en 0
    setIntervalID=setInterval(pequeno,10); //Pone un nuevo intervalo  que tiene el valor de la funcion expandir y le da un tiempo.
  }
  /**
 * Funcion que se encarga de dar efecto hover al texto.
 */
function expandir(){
  if(width<400){ //Limita el tamaño de los pixeles
    width +=diferencia; //Procede a sumar los pixeles para dar el efecto de animacion
    document.getElementById("saludos").style.width=width+"px"; //Toma el elemento al que se le va a dar el efecto
    console.log(width);//log para ver si suma
  }else{
    clearInterval(intervalID);
  }
}
function pequeno(){
  if(width<400){
    width -=diferencia;
    document.getElementById("saludos").style.width=width+"px";
    console.log(width);
  }else{
    clearInterval(intervalID);
  }
}
function playMusic() {
  var audio = document.getElementById("musica");
  audio.play();
}
