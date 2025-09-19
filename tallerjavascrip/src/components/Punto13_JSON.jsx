import { useState, useEffect } from "react";

export function Punto13_JSON() {
  const [usuarioRecuperado, setUsuarioRecuperado] = useState(null);

  useEffect(() => {
    // 1. Crear un objeto normal de JavaScript
    const usuario = {
      id: 1,
      nombre: "Samuel",
      edad: 20,
      activo: true
    };

    console.log("Objeto original:", usuario);

    // 2. Convertir a JSON (string de texto)
    const usuarioJSON = JSON.stringify(usuario);
    console.log("Convertido a JSON:", usuarioJSON);

    // 3. Guardar en localStorage
    localStorage.setItem("usuario", usuarioJSON);

    // 4. Recuperar desde localStorage
    const datosGuardados = localStorage.getItem("usuario");

    // 5. Convertir de nuevo a objeto
    const usuarioObjeto = JSON.parse(datosGuardados);
    console.log("Recuperado del localStorage:", usuarioObjeto);

    // Guardamos en el estado para mostrarlo en pantalla
    setUsuarioRecuperado(usuarioObjeto);
  }, []);

  return (
    <div>
      <h2>JSON en práctica</h2>
      {usuarioRecuperado ? (
        <p>
          👤 Usuario: {usuarioRecuperado.nombre}, Edad: {usuarioRecuperado.edad}
        </p>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}



/*  
📝 Explicación para principiantes

Objeto normal 👉 { id: 1, nombre: "Samuel" }.

JSON.stringify(objeto) 👉 convierte el objeto en texto JSON.

Ejemplo:

'{"id":1,"nombre":"Samuel","edad":20,"activo":true}'


localStorage.setItem("usuario", usuarioJSON) 👉 guarda el string en el navegador.

localStorage.getItem("usuario") 👉 recupera ese string.

JSON.parse(string) 👉 lo convierte otra vez en objeto.
*/