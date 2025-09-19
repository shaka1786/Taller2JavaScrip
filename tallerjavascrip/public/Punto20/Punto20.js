// -----------------------------
// Datos: productos disponibles
// -----------------------------
const productos = [
  { id: 1, nombre: "Mouse", precio: 25 },
  { id: 2, nombre: "Teclado", precio: 60 },
  { id: 3, nombre: "Monitor", precio: 200 },
  { id: 4, nombre: "Audífonos", precio: 40 },
  { id: 5, nombre: "Silla Gamer", precio: 350 },
  { id: 6, nombre: "Impresora", precio: 150 },
  { id: 7, nombre: "USB 64GB", precio: 20 }
];

// Carrito (vacío al inicio)
let carrito = [];

// Referencia al contenedor principal
const app = document.getElementById("app");

// -----------------------------
// Función para mostrar productos
// -----------------------------
function mostrarProductos() {
  const contenedor = document.createElement("div");
  const titulo = document.createElement("h2");
  titulo.textContent = "Productos disponibles";
  contenedor.appendChild(titulo);

  const lista = document.createElement("ul");

  productos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio} `;

    // Input de cantidad
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.value = 1;

    // Botón agregar
    const btn = document.createElement("button");
    btn.textContent = "Agregar";
    btn.onclick = () => agregarAlCarrito(p.id, parseInt(input.value));

    li.appendChild(input);
    li.appendChild(btn);
    lista.appendChild(li);
  });

  contenedor.appendChild(lista);
  app.appendChild(contenedor);
}

// -----------------------------
// Agregar productos al carrito
// -----------------------------
function agregarAlCarrito(id, cantidad) {
  const producto = productos.find(p => p.id === id);
  const item = carrito.find(p => p.id === id);

  if (item) {
    item.cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }

  mostrarCarrito();
}

// -----------------------------
// Mostrar carrito
// -----------------------------
function mostrarCarrito() {
  // Si ya existe la sección del carrito, eliminarla para reconstruir
  const viejo = document.getElementById("carrito");
  if (viejo) viejo.remove();

  const contenedor = document.createElement("div");
  contenedor.id = "carrito";

  const titulo = document.createElement("h2");
  titulo.textContent = "Mi Carrito";
  contenedor.appendChild(titulo);

  const lista = document.createElement("ul");
  let total = 0;

  carrito.forEach(p => {
    const li = document.createElement("li");
    const subtotal = p.precio * p.cantidad;
    li.textContent = `${p.nombre} (x${p.cantidad}) - $${subtotal}`;
    lista.appendChild(li);
    total += subtotal;
  });

  contenedor.appendChild(lista);

  const totalTexto = document.createElement("p");
  totalTexto.textContent = `Total: $${total}`;
  contenedor.appendChild(totalTexto);

  app.appendChild(contenedor);
}



// -----------------------------
// Inicializar app
// -----------------------------
mostrarProductos();
mostrarCarrito();
