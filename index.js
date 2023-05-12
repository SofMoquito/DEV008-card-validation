import validator from './validator.js';


//Select del mes generado dinámicamente
const formulario = document.querySelector("#formulario-tarjeta")

for(let i = 1; i <=12; i++){
  const opcion = document.createElement("option"); //crea elemento HTML en memoria. Para modificar caracteristicas o contenido
  opcion.value = i;
  opcion.textContent = i; // devuelve el contenido de texto 
  formulario.selectMes.appendChild(opcion); // insertar elementos
}

//select del año generado dinámicamente

const yearActual = new Date().getFullYear();

for(let i = yearActual; i <= yearActual + 9; i++){
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.textContent = i;
  formulario.selectYear.appendChild(opcion);
}

// inputs numero, nombre, mes y año
const numeroTarjeta = document.querySelector("#tarjeta .numero");
const nombreTarjeta = document.querySelector("#tarjeta .nombre");
const mesExpiracion = document.querySelector("#tarjeta .mes");
const yearExpiracion = document.querySelector("#tarjeta .year");



formulario.inputNumero.addEventListener("keyup", (e) =>{ //(e) porque el input va a recibir el evento 
  // el valor de lo que se teclea en el input
  const valorInput = e.target.value; 
  //Elimina espacios en blanco/ elimina las letras
  formulario.inputNumero.value = valorInput.replace(/\s/g, "").replace(/\D/g, "");
  //para poner el contenido en la tarjeta
  numeroTarjeta.textContent = valorInput;
});

formulario.inputNombre.addEventListener("keyup",(e) =>{
  const valorInput = e.target.value;
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;

  if(valorInput ===""){
    nombreTarjeta.textContent = "Sofia Saules" 
  }
});

formulario.selectMes.addEventListener("change", (e) => {
  mesExpiracion.textContent = e.target.value;
});

formulario.selectYear.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value;
});




//VALIDACION NUMERO DE TARJETA 

document.getElementById("button").addEventListener("click", function() {
  const numTarjeta = document.getElementById("inputNumero").value;
  const valor = validator.isValid(numTarjeta);
  let esValida = ""

  if (valor === true){
    esValida = "Tarjeta Aprobada";
  }
  else{
    esValida ="Tarjeta No Aprobada";
  }

  const div = document.createElement("div");
  div.id = "alerta";
  div.textContent = esValida;

  formulario.appendChild(div);

  console.log(valor)
    
  const ocultar = validator.maskify(numTarjeta);

  formulario.inputNumero.value = ocultar

  console.log(ocultar)

});

console.log(validator);

















