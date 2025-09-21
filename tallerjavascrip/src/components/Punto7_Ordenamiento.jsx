// 📌 Archivo: Punto7_Ordenamiento.jsx
// Tema: Ordenamiento avanzado con .sort()

export function Punto7_Ordenamiento() {
  // ==============================
  // 🔹 Pregunta del taller:
  // Dado un arreglo de objetos con productos:
  // [
  //   { nombre: "Mouse", precio: 25 },
  //   { nombre: "Teclado", precio: 60 },
  //   { nombre: "Monitor", precio: 200 }
  // ]
  // Ordénalos de menor a mayor precio con .sort().
  // ==============================

  // Arreglo de productos
  let productos = [
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 60 },
    { nombre: "Monitor", precio: 200 }
  ];

  // ==============================
  // 🔹 Ordenar con sort()
  // La función sort recibe 2 elementos (a y b) y devuelve:
  // • Número negativo → a va antes que b
  // • Número positivo → b va antes que a
  // • 0 → no se cambia el orden
  // Aquí restamos precios: a.precio - b.precio
  // Si a es menor, queda primero.
  // ==============================
  productos.sort(function (a, b) {
    return a.precio - b.precio;
  });

  // ==============================
  // 🔹 Convertimos la lista en elementos HTML
  // Usamos un ciclo for básico para principiantes
  // ==============================
  let lista = [];
  for (let i = 0; i < productos.length; i++) {
    lista.push(
      <p key={i}>
        {productos[i].nombre} - ${productos[i].precio}
      </p>
    );
  }

  // ==============================
  // Lo que se mostrará en pantalla
  // ==============================
  return (
    <div>
      {/* Pregunta en pantalla */}
      <h2>Pregunta 7: Ordenamiento avanzado</h2>
      <p>
        Dado un arreglo de objetos con productos, ordénalos de menor a mayor precio
        usando <code>.sort()</code>.
      </p>

      <hr />

      {/* Solución */}
      <h3>Solución:</h3>
      <h4>Productos ordenados por precio:</h4>
      {lista}
    </div>
  );
}
