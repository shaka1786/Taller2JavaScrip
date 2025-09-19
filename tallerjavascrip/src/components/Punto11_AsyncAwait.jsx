import { useState, useEffect } from "react";

export function Punto11_AsyncAwait() {
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

      setTimeout(() => {
        if (producto) {
          resolve(producto); // si lo encuentra
        } else {
          reject("❌ Producto no encontrado"); // si no existe
        }
      }, 1000); // simula 1 segundo de espera
    });
  }

  // 3. Estado para mostrar el mensaje
  const [mensaje, setMensaje] = useState("Buscando producto...");

  // 4. Usamos async/await con try/catch
  async function buscarProducto() {
    try {
      const prod = await getProducto(3); // espera la promesa
      setMensaje("✅ Producto encontrado: " + prod.nombre);
    } catch (error) {
      setMensaje(error);
    }
  }

  // 5. Ejecutamos al montar el componente
  useEffect(() => {
    buscarProducto();
  }, []);

  return (
    <div>
      <h2>Async / Await</h2>
      <p>{mensaje}</p>
    </div>
  );
}
