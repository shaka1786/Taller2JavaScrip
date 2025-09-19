export function Punto8_BuscarArrays() {
  // 1. Creamos un arreglo de usuarios
  const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" },
    { id: 3, nombre: "Pedro" }
  ];

  // 2. Usamos .find() para buscar el usuario con id = 2
  const usuarioEncontrado = usuarios.find((usuario) => usuario.id === 2);

  // 3. Si no existe, mostramos un objeto vacío {}
  const resultado = usuarioEncontrado || {};

  return (
    <div>
      <h2>Buscar usuario con id 2</h2>
      <p>
        {resultado.nombre
          ? `Usuario encontrado: ${resultado.nombre}`
          : "No se encontró, devolvemos {}"}
      </p>
    </div>
  );
}
