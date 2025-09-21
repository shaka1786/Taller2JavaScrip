// 📌 Archivo: Punto1_Bloquest.jsx
// Recuerda que los archivos en React con JSX deben terminar en .jsx
// Este archivo lo puedes importar en tu App.jsx para mostrarlo.

export function Punto1_Bloquest() {
  // ==============================
  // 🔹 EJEMPLO CON var
  // "var" se comporta raro porque NO respeta los bloques { }
  // o sea, si cambias su valor dentro de un bloque, también
  // se cambia por fuera.
  // ==============================
  var x = 1; // valor inicial
  {
    var x = 2; // cambia el mismo x de arriba
  }
  // Aquí afuera x quedó con valor 2

  // ==============================
  // 🔹 EJEMPLO CON let
  // "let" respeta los bloques { }
  // si declaras un let dentro de un bloque, ese valor
  // solo existe allí dentro y afuera sigue el original.
  // ==============================
  let y = 1; // valor inicial
  {
    let y = 2; // este "y" solo vive en este bloque
    // afuera este valor desaparece
  }
  // Aquí afuera y sigue valiendo 1

  // ==============================
  // 🔹 EJEMPLO CON const
  // "const" funciona parecido a let en el tema de los bloques,
  // pero además NO puedes cambiarle el valor una vez declarado.
  // ==============================
  const z = 1; // valor inicial
  {
    const z = 2; // este z es otro, solo vive dentro del bloque
  }
  // Aquí afuera z sigue siendo 1

  // ==============================
  // Lo que se mostrará en pantalla
  // ==============================
  return (
    <div>

<h2>1. Tipos de variables y scope</h2>
<p>Explica y demuestra con código cómo se comportan var, let y const en diferentes bloques.</p> 

      <h2>Tipos de variables: var, let y const</h2>

      {/* NOTA: Lo que ves después de los → es el valor final */}
      <p>
        <strong>var:</strong> después del bloque → {x}  
        {/* Debería mostrar 2 */}
      </p>

      <p>
        <strong>let:</strong> después del bloque → {y}  
        {/* Debería mostrar 1 */}
      </p>

      <p>
        <strong>const:</strong> después del bloque → {z}  
        {/* Debería mostrar 1 */}
      </p>
    </div>
  );
}
