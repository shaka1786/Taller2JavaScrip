
//1. Tipos de variables y scope
//Explica y demuestra con código cómo se comportan var, let y const en diferentes bloques { }.



export  function Punto1_Bloquest() {
  // var ignora bloques
  var x = 1;
  {
    var x = 2; // sobrescribe la de afuera
  }

  // let respeta bloques
  let y = 1;
  {
    let y = 2; // solo existe en este bloque
  }

  // const respeta bloques
  const z = 1;
  {
    const z = 2; // solo existe en este bloque
  }

  return (
    <div>
      <h2>Demostración de var, let y const</h2>

      <p>
        <strong>var:</strong> después del bloque → {x}
      </p>
      <p>
        <strong>let:</strong> después del bloque → {y}
      </p>
      <p>
        <strong>const:</strong> después del bloque → {z}
      </p>
    </div>
  );
}

//resumen
//var se sobrescribió dentro del bloque (pasó de 1 a 2).
//let y const no se sobrescribieron, siguen valiendo 1.
