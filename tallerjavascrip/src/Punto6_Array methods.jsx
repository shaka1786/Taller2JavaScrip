export default function Punto6_Array_methods() {
  // Arreglo original
  let numeros = [3, 8, 12, 5, 20, 7];

  // Usamos filter para quedarnos con los mayores que 6
  // y luego map para sacar el doble de esos números
  let resultado = numeros
    .filter(function (n) {
      return n > 6;
    })
    .map(function (n) {
      return n * 2;
    });

  // Mostramos en la página
  return (
    <div>
      <h1>Array Methods Encadenados</h1>
      <p>Números originales: {numeros.join(", ")}</p>
      <p>Doble de los mayores que 6: {resultado.join(", ")}</p>
    </div>
  );
}
