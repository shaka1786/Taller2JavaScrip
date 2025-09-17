// ============================================================================
// 📌 CHULETARIO REACT + VITE
// Este archivo es una guía completa con ejemplos y notas importantes.
// Lo puedes dejar en tu proyecto como referencia mientras practicas.
// ============================================================================

// ===============================================================
// 🔹 PASOS PARA CREAR EL PROYECTO DESDE CERO (EN TERMINAL)
// ===============================================================
//
// 1. Crear un proyecto con Vite y React:
//    npm create vite@latest nombre-proyecto
//
// 2. Entrar a la carpeta del proyecto:
//    cd nombre-proyecto
//
// 3. Instalar dependencias:
//    npm install
//
// 4. Levantar el servidor en modo desarrollo:
//    npm run dev
//
// 5. Abrir http://localhost:5173 en tu navegador
//
// 🔹 TIP: si ves error en el puerto, revisa en consola cuál asignó Vite.
// 🔹 TIP: si usas Windows y no funciona npm, revisa la política de ejecución (powershell).
//
// ============================================================================

import { useState, useEffect } from "react";

// ===============================================================
// 🔹 COMPONENTE BÁSICO
// ===============================================================
export function HolaMundo() {
  // 📌 Un componente siempre es una función que retorna JSX
  // 📌 JSX = HTML dentro de JavaScript
  // 📌 Siempre debe devolver UN solo elemento padre (<div>, <section>, etc.)
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer componente en React</p>
    </div>
  );
}

// ===============================================================
// 🔹 EXPORTACIONES
// ===============================================================
//
// 📌 Hay dos tipos de exportación:
// - "Nombrada": se exporta con su nombre exacto
// - "Por defecto": solo puede haber una por archivo
//
export function Header() {
  return <h2>Yo soy un Header (export nombrada)</h2>;
}

export default function Footer() {
  return <h2>Yo soy un Footer (export por defecto)</h2>;
}

// Ejemplo de importación:
// import { Header } from "./CheatSheet";
// import Footer from "./CheatSheet";

// ===============================================================
// 🔹 useState (manejo de estado)
// ===============================================================
export function Contador() {
  // useState crea una variable "reactiva" (que al cambiar, React re-renderiza)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Ejemplo con useState</h2>
      <p>Has hecho clic {count} veces</p>

      {/* 📌 Al hacer clic, sumamos 1 */}
      <button onClick={() => setCount(count + 1)}>Sumar</button>

      {/* 📌 Reiniciamos el contador */}
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  );
}

// ===============================================================
// 🔹 useEffect (efectos secundarios)
// ===============================================================
export function Reloj() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 📌 Se ejecuta una vez al inicio gracias al []
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 📌 cleanup: importante limpiar intervalos o listeners
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Ejemplo con useEffect</h2>
      <p>Hora actual: {time}</p>
    </div>
  );
}

// ===============================================================
// 🔹 Ejemplo con MÚLTIPLE ESTADO
// ===============================================================
export function Usuario() {
  // Varios useState en el mismo componente
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  return (
    <div>
      <h2>Formulario con varios estados</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

// ===============================================================
// 🔹 CSS BÁSICO Y BUENAS PRÁCTICAS
// ===============================================================
//
// 📌 Siempre usar "className" en lugar de "class" en JSX
// 📌 CSS se importa en el archivo del componente con: import "./Nombre.css"
// 📌 Mantener cada componente con su propio .css ayuda a la organización
//
// Ejemplo de archivo "MiComponente.css":
//
// .caja {
//   background-color: lightblue;  /* Color de fondo */
//   padding: 10px;                /* Relleno interno */
//   margin: 10px;                 /* Margen externo */
//   border: 1px solid gray;       /* Borde */
//   border-radius: 8px;           /* Bordes redondeados */
// }
//
// .titulo {
//   font-size: 24px;              /* Tamaño de fuente */
//   text-align: center;           /* Alineación de texto */
//   color: darkblue;              /* Color del texto */
// }
//
// .btn {
//   background: black;
//   color: white;
//   padding: 8px 12px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }
//
// .btn:hover {
//   background: gray;             /* Color al pasar el mouse */
// }
//

import "./MiComponente.css";

export function MiComponente() {
  return (
    <div className="caja">
      <h1 className="titulo">Hola con Estilos</h1>
      <button className="btn">Haz clic</button>
    </div>
  );
}

// ===============================================================
// 🔹 NOTAS FINALES
// ===============================================================
//
// ✅ Cada componente debe estar en PascalCase (primera mayúscula)
// ✅ No olvides envolver JSX en un único elemento padre
// ✅ useState → para manejar datos dinámicos
// ✅ useEffect → para manejar efectos (fetch, intervalos, etc.)
// ✅ Mantén cada componente con su propio CSS (mejores prácticas)
// ✅ Usa export default solo si tu archivo tiene un único componente
//
// ============================================================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// ============================================================================


//para agregar el servidor.

/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,   // escucha en 0.0.0.0
    port: 5173,   // opcional, pero así te aseguras
    allowedHosts: [
      "visualstudiocode1.smh1786.space"  // tu dominio
    ]
  }

})

*/

// ============================================================================
// 📌 FLEXBOX NOTAS
// Este archivo NO es un componente visual, sino un recordatorio
// para tener siempre a mano los comandos más usados de Flexbox en React.
// Puedes abrirlo cuando necesites recordar cómo alinear elementos con CSS.

export function FlexboxNotas() {
  return (
    <div style={{ padding: "20px", fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
      {`
📌 CSS Flexbox - Notas rápidas

1️⃣ flex-direction → Dirección principal del eje
   - row             → Elementos en fila (default)
   - column          → Elementos en columna
   - row-reverse     → Fila invertida
   - column-reverse  → Columna invertida

2️⃣ align-items → Alinea elementos en el eje cruzado (vertical si row)
   - flex-start      → Arriba / Izquierda
   - center          → Centrado
   - flex-end        → Abajo / Derecha
   - stretch         → Estirados al alto total

3️⃣ justify-content → Distribuye espacio en el eje principal
   - flex-start      → Inicio
   - center          → Centro
   - flex-end        → Final
   - space-between   → Espacio entre elementos
   - space-around    → Espacio alrededor
   - space-evenly    → Espacio uniforme entre todos

4️⃣ align-content → Alinea varias filas (cuando hay wrap)
   - flex-start      → Arriba
   - center          → Centrado
   - flex-end        → Abajo
   - stretch         → Estirado
   - space-between   → Espacio entre filas
   - space-around    → Espacio alrededor

⚡ Tip: Recuerda que "align-items" es para dentro de una sola fila/columna,
       mientras que "align-content" es cuando tienes varias filas con wrap.
`}
    </div>
  );
}


// ============================================================================