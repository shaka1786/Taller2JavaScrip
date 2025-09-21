// 📌 Archivo: Punto2_TemplateStrings.jsx
// Recuerda: las template strings son comillas invertidas → ` `
// y permiten mezclar texto con variables usando ${ }.

export function Punto2_TemplateStrings() {
  // ==============================
  // 🔹 Creamos un objeto "usuario"
  // Un objeto es como una "cajita" que guarda pares de:
  // propiedad: valor
  // ==============================
  const usuario = {
    nombre: "Ana",          // propiedad "nombre" con valor "Ana"
    rol: "administrador",   // propiedad "rol" con valor "administrador"
  };

  // ==============================
  // 🔹 Creamos una función que recibe un objeto
  // y devuelve un texto usando template strings
  // ==============================
  function mostrarUsuario(alguien) {
    // Usamos comillas invertidas ``
    // Dentro de ellas se puede escribir normal
    // y también insertar variables con ${ }
    return `El usuario ${alguien.nombre} tiene el rol de ${alguien.rol}.`;
  }

  // ==============================
  // Lo que se mostrará en la página
  // ==============================
  return (
    <div>
      <h2>2. Template strings</h2>
      <p>Crea una función que reciba un objeto usuario con nombre y rol, y retorne:
El usuario Ana tiene el rol de administrador. usando template literals.
</p>

      <h2>Ejemplo: Template Strings</h2>

      {/* Aquí llamamos la función y le pasamos el objeto usuario */}
      <p>{mostrarUsuario(usuario)}</p>

      {/* También podemos probar con otro usuario */}
      <p>{mostrarUsuario({ nombre: "Luis", rol: "editor" })}</p>

      {/* Incluso directo sin crear objeto aparte */}
      <p>{mostrarUsuario({ nombre: "María", rol: "lectora" })}</p>
    </div>
  );
}
