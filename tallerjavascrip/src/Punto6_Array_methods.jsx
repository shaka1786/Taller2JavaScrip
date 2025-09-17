export  function Punto6_Array_methods() {

  // Arreglo original
  let numeros = [3, 8, 12, 5, 20, 7];

  // Arreglo donde guardaremos el resultado
  let resultado = [];

  // Recorremos con un ciclo for
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 6) {              // condición: mayor que 6
      resultado.push(numeros[i] * 2);  // guardamos el doble en el nuevo arreglo
    }
  }

  // Mostramos en la página
  return (
    <div>
      <h1>Array con ciclo for</h1>
      <p>Números originales: {numeros.join(", ")}</p>
      <p>Doble de los mayores que 6: {resultado.join(", ")}</p>
    </div>
  );
}
