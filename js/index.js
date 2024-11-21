const clientes= { 
   11: {
        id: 11,
        nombre: "bill",
        apellido: "gates",
        edad: 68,
 },    
 12:{
        id: 12,
        nombre:"mark",
        apellido:"zuckerberg",
        edad:"40",
 },
  };

console.log(clientes);

let clientesJson= JSON.stringify(clientes);

localStorage.setItem('clientes', clientesJson);

function obtenerCliente(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const cliente = clientes [id];
            if (cliente){ 
            resolve(cliente);
            console.log(cliente)    
            }else {
            reject("no es un cliente registrado")    
             }

        }, 3000)
    })
}
const userId= prompt("ingresa cliente 11 o 12");
obtenerCliente(Number(userId))
.then(cliente=> {
 console.log("el cliente es: " + cliente.nombre )
 alert("el cliente es: " + cliente.nombre )
})

.catch(error=>{
  console.log(error)
  alert(error)
})

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, imagen: './images/aorus-17g.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 200, imagen: './images/asus-vivobook.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 300, imagen: './images/dell-latitude.jpg' },
    { id: 4, nombre: 'Producto 4', precio: 300, imagen: './images/hp-i7.jpg' },
    { id: 5, nombre: 'Producto 5', precio: 300, imagen: './images/lenovo-idealpad-3.jpg' },
    { id: 6, nombre: 'Producto 6', precio: 300, imagen: './images/lg-gram-17.jpg' },
    { id: 7, nombre: 'Producto 7', precio: 300, imagen: './images/macbook-13.jpg' },
    { id: 8, nombre: 'Producto 8', precio: 300, imagen: './images/samsung-9-pro.jpg' } ];

    console.log(productos);

let productosJson= JSON.stringify(productos);

localStorage.setItem('productos', productosJson);


const carrito = [];


const listaProductos = document.getElementById('lista-productos');
const itemsCarrito = document.getElementById('items-carrito');
const precioTotal = document.getElementById('precio-total');
const contadorCarrito = document.getElementById('contador-carrito');
const carritoSeccion = document.getElementById('carrito');


function renderizarProductos() {
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('tarjeta-producto');
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    });
}

function agregarAlCarrito(id){
    const producto = productos.find(item => item.id === id);
    carrito.push(producto);
    actualizarCarrito();
    Toastify({
        text:`${producto.nombre}, agregar al carrito`,
        duration:1500,
        gravity:"top",
        position:"right",
        background:"blue",
        
    }).showToast();
}

function actualizarCarrito(){
    renderizarCarrito();
    actualizarTotal();
    actualizarContador()
}

function eliminarDelCarrito(indice){
    carrito.splice(indice, 1);
    actualizarCarrito()
}

function renderizarCarrito(){
    itemsCarrito.innerHTML=``;
    carrito.forEach((item, indice) =>{
    const li= document.createElement(`li`);
    li.innerHTML=`
    ${item.nombre} - ${item.precio}; 
    <button onclick="eliminarDelCarrito (${indice})">x</button>
    ` 
    itemsCarrito.appendChild(li)
    })
}

function actualizarTotal(){
    const total= carrito.reduce((acum, item) => acum + item.precio,0);
    precioTotal.textContent= total;
}

function actualizarContador(){
    contadorCarrito.textContent= carrito.length;
}

function alternarCarrito(){
    carritoSeccion.style.display= carritoSeccion.style.display === `none` || carritoSeccion.style.display === `` ? `block`: `none`;
}

function finalizarCompra(){
    if(carrito.length === 0 ){
     swal.fire({
        icon:`warning`,
        title:`carrito vacio`,
        text:`no hay ningun producto`
     }); 
     }else{
     swal.fire({
        icon:`success`,
        title:`compra exitosa`,
        text:`gracias por la compra`
     }).then(()=>{
        carrito.length= 0;
        actualizarCarrito()
     })
     }
}
 
renderizarProductos();


const url= `https://jsonplaceholder.typicode.com/comments?postId=2`;
1
fetch(url)
  .then(respuesta =>respuesta.json())
  .then((comentarios)=>{
    console.log(comentarios)
  })
  .catch(error=> console.log(error))
  
  async function obtenerComentario() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`);
    const comentarioUno = await response.json()
    console.log(comentarioUno)
}

obtenerComentario();

