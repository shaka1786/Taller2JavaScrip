// ========================================
// PUNTO 8: Buscar en Arrays con .find()
// ========================================
export function Punto8_BuscarArrays() {
  // 🔹 1. Creamos un arreglo de usuarios (es como una lista de objetos)
  const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" },
    { id: 3, nombre: "Pedro" }
  ];

  // 🔹 2. Usamos .find()
  // .find() busca el PRIMER elemento que cumpla la condición
  // En este caso, buscamos el usuario que tenga id === 2
  const usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.id === 2; // ✅ condición
  });

  // 🔹 3. Si no existe, devolvemos un objeto vacío {}
  // Usamos "||" (OR lógico) → si "usuarioEncontrado" es undefined, entonces resultado = {}
  const resultado = usuarioEncontrado || {}; //Evitar error con || {}

  // 🔹 4. Mostramos en pantalla
  return (
    <div>
      <h2>Pregunta 8: Buscar en Arrays con .find()</h2>

      <h3>Usuarios registrados:</h3>
      {/* .map() sirve para recorrer y mostrar cada usuario */}
      {usuarios.map(function (u, index) {
        return (
          <p key={index}>
            ID: {u.id} - Nombre: {u.nombre}
          </p>
        );
      })}

      <h2>Resultado de búsqueda</h2>
      {/* Usamos operador ternario: condición ? si : no */}
      <p>
        {resultado.nombre
          ? `✅ Usuario encontrado: ${resultado.nombre}`
          : "❌ No se encontró, devolvemos {}"}
      </p>

      {/* JSON.stringify → convierte el objeto en texto legible */}
      <p>Objeto resultado: {JSON.stringify(resultado)}</p>
    </div>
  );
}
