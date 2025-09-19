/*
7. Ordenamiento avanzado
Dado un arreglo de objetos con productos:
[
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Monitor", precio: 200 }
]
Ordénalos de menor a mayor precio con .sort().
*/

export  function Punto7_Ordenamiento() {
  // Arreglo de productos
  let productos = [
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 60 },
    { nombre: "Monitor", precio: 200 }
  ];

  // Ordenamos de menor a mayor precio con sort
  productos.sort(function (a, b) {
    return a.precio - b.precio; // si es negativo, 'a' va antes que 'b'
  });

  // Mostramos en pantalla con un ciclo for
  let lista = [];
  for (let i = 0; i < productos.length; i++) {
    lista.push(
      <p key={i}>
        {productos[i].nombre} - ${productos[i].precio}
      </p>
    );
  }

  return (
    <div>
      <h1>Ordenamiento con sort()</h1>
      <h2>Productos ordenados por precio:</h2>
      {lista}
    </div>
  );
}
