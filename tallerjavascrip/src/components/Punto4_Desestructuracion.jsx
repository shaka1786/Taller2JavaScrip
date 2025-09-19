/*
4. Desestructuración de objetos y arreglos
Dado el objeto:
const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};
Obtén con desestructuración: titulo, duracion y el primer tema.
*/


export  function Punto4_Desestructuracion() {

  // Objeto curso
  const curso = {
    titulo: "JavaScript",
    duracion: 40,
    temas: ["Funciones", "Objetos", "Asincronía"]
  };

  // Desestructuración del objeto
  const { titulo, duracion, temas } = curso;

  // Desestructuración del arreglo (temas)
  const [tema1, tema2, tema3] = temas;

  // Lo mostramos en pantalla con etiquetas HTML
  return (
    <div>
      <h1>Curso: {titulo}</h1>
      <p>Duración: {duracion} horas</p>
      <p>Temas:</p>
      <p>{tema1}</p>
      <p>{tema2}</p>
      <p>{tema3}</p>
    </div>
  );
}

