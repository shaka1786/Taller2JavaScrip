// 📌 Archivo: Punto4_Desestructuracion.jsx
// En este ejemplo veremos cómo "desestructurar" objetos y arreglos.
// La desestructuración es una forma rápida de sacar datos de objetos o arrays.

export function Punto4_Desestructuracion() {
  // ==============================
  // 🔹 Pregunta del taller:
  // Dado el objeto:
  // const curso = {
  //   titulo: "JavaScript",
  //   duracion: 40,
  //   temas: ["Funciones", "Objetos", "Asincronía"]
  // };
  // Obtén con desestructuración: titulo, duracion y el primer tema.
  // ==============================

  // Creamos el objeto curso
  const curso = {
    titulo: "JavaScript",
    duracion: 40,
    temas: ["Funciones", "Objetos", "Asincronía"]
  };

  // ==============================
  // 🔹 Desestructuración del objeto
  // Sacamos directamente las propiedades en variables
  // En lugar de escribir curso.titulo o curso.duracion
  // ==============================
  const { titulo, duracion, temas } = curso;

  // ==============================
  // 🔹 Desestructuración del arreglo "temas"
  // Cada posición del arreglo se guarda en una variable
  // ==============================
  const [tema1, tema2, tema3] = temas;

  // ==============================
  // Lo que se mostrará en pantalla
  // ==============================
  return (
    <div>
      {/* Mostramos la pregunta en pantalla */}
      <h2>Pregunta 4: Desestructuración de objetos y arreglos</h2>
      <p>
        Dado el objeto curso, obtén con desestructuración: <br />
        <strong>titulo</strong>, <strong>duracion</strong> y el primer tema.
      </p>

      <hr />   {/*genera linea*/}

      {/* Mostramos la solución */}
      <h3>Solución:</h3>
      <h4>Curso: {titulo}</h4>
      <p>Duración: {duracion} horas</p>
      <p>Temas:</p>
      <ul>
        <li>{tema1}</li>
        <li>{tema2}</li>
        <li>{tema3}</li>
      </ul>
    </div>
  );
}
