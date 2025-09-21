// 📌 Archivo: Punto11_AsyncAwait.jsx
// Recuerda importarlo en App.jsx para mostrarlo en Vite

import { useState, useEffect } from "react";

export function Punto11_AsyncAwait() {
  /*
   ==========================================================
   11. Async / Await
   Pregunta:
   Reescribe el ejercicio anterior con async/await
   y manejo de errores usando try/catch.
   ==========================================================
  */

  // 👉 1. Arreglo de productos
  // (nuestra pequeña "base de datos")
  const productos = [
    { id: 1, nombre: "Mouse" },
    { id: 2, nombre: "Teclado" },
    { id: 3, nombre: "Monitor" }
  ];

  /*
   👉 2. Función que devuelve una promesa
   - resolve() → si encuentra el producto
   - reject() → si no lo encuentra
   - setTimeout() → simula que tarda en responder (1 segundo)
  */
  function getProducto(id) {
    return new Promise((resolve, reject) => {
      const producto = productos.find((p) => p.id === id);

      setTimeout(() => {
        if (producto) {
          resolve(producto); // encontrado ✅
        } else {
          reject("❌ Producto no encontrado"); // error ❌
        }
      }, 1000);
    });
  }

  // 👉 3. Estado donde guardaremos el mensaje que se muestra en pantalla
  const [mensaje, setMensaje] = useState("Buscando producto...");

  /*
   👉 4. Usamos async/await dentro de una función
   - try → intenta ejecutar el código (si todo va bien)
   - catch → atrapa el error (si algo falla)
  */
  async function buscarProducto() {
    try {
      const prod = await getProducto(3); // probamos con id = 3
      setMensaje("✅ Producto encontrado: " + prod.nombre);
    } catch (error) {
      setMensaje(error); // mostramos el error
    }
  }

  // 👉 5. Ejecutamos la búsqueda al cargar el componente
  useEffect(() => {
    buscarProducto();
  }, []); // [] = solo una vez al montar el componente

  // 👉 6. Mostramos todo en pantalla
  return (
    <div>
      {/* Pregunta */}
      <h2>11. Async / Await</h2>
      <p>
        Reescribe el ejercicio anterior con <strong>async/await</strong> y manejo
        de errores usando <strong>try/catch</strong>.
      </p>

      {/* Resultado dinámico */}
      <h3>Resultado:</h3>
      <p>{mensaje}</p>
    </div>
  );
}

/*
 📌 NOTAS IMPORTANTES
 - "async" marca que una función usará "await".
 - "await" espera a que una promesa termine antes de seguir.
 - "try" es como: "intenta hacer esto..."
 - "catch" es como: "...si falla, atrapo el error y lo muestro".

 Diferencia con el punto anterior:
 - Antes usamos .then() y .catch()
 - Ahora usamos async/await que se parece más a escribir código paso a paso.
*/
