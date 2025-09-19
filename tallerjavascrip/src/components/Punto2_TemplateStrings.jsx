/*
2. Template strings
Crea una función que reciba un objeto usuario con nombre y rol, y retorne:
El usuario Ana tiene el rol de administrador. usando template literals.
*/ 


export  function Punto2_TemplateStrings() {

  // Creamos un objeto usuario
  const usuario = {
    nombre: "Ana",
    rol: "administrador",
  };

  // Función que usa template strings
  function ingreseUsuario(alguien) {
    return `El usuario ${alguien.nombre} tiene el rol de ${alguien.rol}.`;
  }

  return (
    <div>
      <h2>Ejemplo: Template Strings</h2>
      <p>{ingreseUsuario(usuario)}</p>
    </div>
  );
}
