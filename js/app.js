//Metodos String
// const producto = "monitor de 20 pulgadas";

//verifica cuantos caracteres hay en un String
// console.log(producto.length);
//busca la posicion de la letra inicial que se encuentra en la candena de texto
// console.log(producto.indexOf("pulgadas"));
// Verifica si la palabra esta incluida en la cada de texto ( true o false )
// console.log(producto.includes("de"));

//Concatenación ES6
// const producto2 = "Monitor";
// const producto3 = "de 20 pulgadas";
// const producto4 = "En Oferta";

// console.log(`El ${producto2} ${producto3} esta ${producto4}`);

//Espacios en blanco de un string

// const compu = "       Monitor Curvo de 20 pulgadas    ";

//quita los espacios blancos del inicio
// console.log(compu.trimStart());
//Quita los espacios en blancos en el final
// console.log(compu.trimEnd());
//Quita los espacios en blancos del inicio y del final
// console.log(compu.trim());

//Metodos String
// const instru = "La Guitarra electrica ";
//replace
// console.log(instru.replace("Guitarra","Bateria"));
//Slice - corta la palabra desde la letra inicial hasta el final
// console.log(instru.slice(0,11));
// console.log(instru.slice(8,1));
//SubSstring invertido o normal cuenta las o corta la cadena de texto
// console.log(instru.substring(0,11));
// console.log(instru.substring(11, 0));
//Chart
// console.log(instru.charAt(0));
// console.log(instru.charAt(1));
// console.log(instru.charAt(2));
// console.log(instru.charAt(3));

const openMenu = document.querySelector('.openMenu');
const navbarLink = document.querySelector('.navbar__link');

openMenu.addEventListener('click', () => {
    navbarLink.classList.toggle('show');
});
