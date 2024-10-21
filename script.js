const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número secreto
let intentos = 0;
let intentosPrevios = [];

function adivinar() {
  const input = document.getElementById("guessInput").value; // Captura el valor del input
  let numeroIngresado = parseInt(input, 10); // Convertir a número

  // Verifica si el número ingresado es válido
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    document.getElementById("mensaje").textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    return; // Evitar continuar si no es válido
  }

  intentos++; //  contador de intentos
  intentosPrevios.push(numeroIngresado); // Guardar el intento en el array

  // Comparar el número ingresado con el número secreto
  if (numeroIngresado === numeroSecreto) {
    document.getElementById("mensaje").textContent = `Felicidades, adivinaste el número secreto ${numeroSecreto}.`;
    document.getElementById("intentos").textContent = `Intentos previos: ${intentosPrevios.join(', ')}`;
  } else {
    document.getElementById("mensaje").textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
  }
}
