export function Punto10_Promesas() {
  // 1. Arreglo de productos
  const productos = [
    { id: 1, nombre: "Mouse" },
    { id: 2, nombre: "Teclado" },
    { id: 3, nombre: "Monitor" }
  ];

  // 2. Función que devuelve una promesa
  function getProducto(id) {
    return new Promise((resolve, reject) => {
      const producto = productos.find((p) => p.id === id);

      if (producto) {
        resolve(producto); // si lo encuentra
      } else {
        reject("❌ Producto no encontrado"); // si no existe
      }
    });
  }

  // 3. Probar la promesa
  let mensaje = "";

  getProducto(2)
    .then((prod) => {
      mensaje = "✅ Producto encontrado: " + prod.nombre;
    })
    .catch((error) => {
      mensaje = error;
    });

  // 4. Mostrar en pantalla
  return (
    <div>
      <h2>Promesas</h2>
      <p>{mensaje || "Buscando producto..."}</p>
    </div>
  );
}

/*
🔹 ¿Qué son las promesas?

Una promesa en JavaScript es como una caja vacía 📦 que te promete que en el futuro pondrá dentro un valor (si todo salió bien) o un error (si algo salió mal).

👉 La idea es esperar resultados que tardan tiempo, sin detener todo el programa.

🔹 ¿Para qué se usan?

Se usan cuando trabajamos con tareas asíncronas (que no se resuelven de inmediato).
Ejemplos típicos:

Pedir datos a un servidor (API / base de datos).

Leer un archivo.

Esperar un temporizador (setTimeout).

Consultar si existe algo en una lista grande.
*/
