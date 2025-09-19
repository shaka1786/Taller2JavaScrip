import { useState, useEffect } from "react";

export function Punto12_SimulacionAPI() {
  // 1. Arreglo de posts (como si fueran datos de una API)
  const posts = [
    { id: 1, titulo: "Aprendiendo JavaScript" },
    { id: 2, titulo: "React con Vite" },
    { id: 3, titulo: "Async/Await es genial" }
  ];

  // 2. Función: obtener todos los posts
  function getPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000); // simula 1 segundo de espera
    });
  }

  // 3. Función: obtener un post por id
  function getPostById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = posts.find((p) => p.id === id);
        if (post) {
          resolve(post);
        } else {
          reject("❌ Post no encontrado");
        }
      }, 1000);
    });
  }

  // 4. Función: agregar un nuevo post
  function addPost(nuevoPost) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(nuevoPost);
        resolve("✅ Post agregado correctamente");
      }, 1000);
    });
  }

  // 5. Estado para mostrar resultados
  const [mensaje, setMensaje] = useState("Cargando...");

  // 6. Probar funciones con async/await
  useEffect(() => {
    async function probarAPI() {
      try {
        const todos = await getPosts();
        console.log("📌 Todos los posts:", todos);

        const uno = await getPostById(2);
        console.log("📌 Post con id=2:", uno);

        const agregado = await addPost({ id: 4, titulo: "Nuevo post con Promesas" });
        console.log(agregado);

        const actualizados = await getPosts();
        console.log("📌 Posts actualizados:", actualizados);

        setMensaje("✅ Revisa la consola para ver los resultados de la API simulada");
      } catch (error) {
        setMensaje(error);
      }
    }

    probarAPI();
  }, []);

  return (
    <div>
      <h2>Simulación de API</h2>
      <p>{mensaje}</p>
    </div>
  );
}


/*
📝 Explicación para principiantes

posts 👉 es nuestro arreglo de datos (simula la base de datos).

getPosts() 👉 devuelve todos los posts.

getPostById(id) 👉 busca un post con .find().

Si lo encuentra → resolve(post).

Si no → reject("error").

addPost(nuevoPost) 👉 agrega un post al arreglo y devuelve un mensaje de éxito.

async/await con try/catch 👉 para probar cada función como si llamáramos a una API real.
*/