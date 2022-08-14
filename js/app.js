class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGeneracion() {
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      alert("Generacion: Silent Generation");
      alert("Rasgo caracteristico: Austeridad");
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      alert("Generacion: Baby Boom");
      alert("Rasgo caracteristico: Ambicion");
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      alert("Generacion X");
      alert("Rasgo caracteristico: Obsesion por el exito");
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      alert("Generacion Y");
      alert("Rasgo caracteristico: Frustacion");
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      alert("Generacion Z");
      alert("Rasgo caracteristico: Irreverencia");
    } else {
      alert("Generacion no declarada");
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad`);
    } else {
      alert(`${this.nombre} no es mayor de edad`);
    }
  }
  mostrarDatos() {
    alert(`Nombre: ${this.nombre}`);
    alert(`Edad: ${this.edad}`);
    alert(`DNI: ${this.dni}`);
    alert(`Sexo: ${this.sexo}`);
    alert(`Peso: ${this.peso} kg`);
    alert(`Altura: ${this.altura} mts`);
    alert(`Año de Nacimiento: ${this.añoNacimiento}`);
  }
  get mostrarNombre() {
    return this.nombre;
  }
  get mostrarEdad() {
    return this.edad;
  }
  get mostrarDNI() {
    return this.dni;
  }
  get mostrarSexo() {
    return this.sexo;
  }
  get mostrarPeso() {
    return this.peso;
  }
  get mostrarAltura() {
    return this.altura;
  }
  get mostrarAñoNacimiento() {
    return this.añoNacimiento;
  }
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarEdad(nuevaEdad) {
    this.edad = nuevaEdad;
  }
  set modificarDNI(nuevoDNI) {
    this.dni = nuevoDNI;
  }
  set modificarSexo(nuevoSexo) {
    this.sexo = nuevoSexo;
  }
  set modificarPeso(nuevoPeso) {
    this.peso = nuevoPeso;
  }
  set modificarAltura(nuevaAltura) {
    this.altura = nuevaAltura;
  }
  set modificarAñoNacimiento(nuevoAñoNacimiento) {
    this.añoNacimiento = nuevoAñoNacimiento;
  }
}
let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", enviar);

/*Me intereso la forma que habia realizado este ejercicio Emi  y decidi intentarlo hacer, esta seria la version barata ajsasjasaj, de todas formas en los commit pasados se pueden fijar de la otra forma que lo habia realizado, saludos!! */

function enviar(e) {
  e.preventDefault();
  let idNombre = document.querySelector("#nombre").value;
  let sectionBotones = document.querySelector('#sectionBotones')
  let parrafNombre = document.createElement('h2')
  parrafNombre.innerHTML = `Persona ingresada: ${idNombre}`
  parrafNombre.className = 'my-4 text-white text-center'
  sectionBotones.appendChild(parrafNombre)
  let botones = `<article class="row my-5"><div class="col-4"><button type="button" class="btn btn-warning container" onclick="mostrarData()">Mostrar Datos</button></div>
  <div class="col-4"><button type="button" class="btn btn-success container" onclick="mostrarGeneracion()">Mostrar Generacion</button></div>
  <div class="col-4"><button type="button" class="btn btn-danger container" onclick="mostrarEdad()">Mostrar si es mayor de Edad</button></div></article>`
  sectionBotones.innerHTML += botones
}

function mostrarData() {
  let idNombre = document.querySelector("#nombre").value;
  let idEdad = document.querySelector("#edad").value;
  let idDNI = document.querySelector("#DNI").value;
  let idSexo = document.querySelector("#sexo").value;
  let idPeso = document.querySelector("#peso").value;
  let idAltura = document.querySelector("#altura").value;
  let idAñoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  let personaX = new Persona(
    idNombre,
    idEdad,
    idDNI,
    idSexo,
    idPeso,
    idAltura,
    idAñoDeNacimiento
  );
  console.log(personaX);
  personaX.mostrarDatos();
}
function mostrarGeneracion() {
  let idNombre = document.querySelector("#nombre").value;
  let idEdad = document.querySelector("#edad").value;
  let idDNI = document.querySelector("#DNI").value;
  let idSexo = document.querySelector("#sexo").value;
  let idPeso = document.querySelector("#peso").value;
  let idAltura = document.querySelector("#altura").value;
  let idAñoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  let personaX = new Persona(
    idNombre,
    idEdad,
    idDNI,
    idSexo,
    idPeso,
    idAltura,
    idAñoDeNacimiento
  );
  console.log(personaX);
  personaX.mostrarGeneracion();
}
function mostrarEdad() {
  let idNombre = document.querySelector("#nombre").value;
  let idEdad = document.querySelector("#edad").value;
  let idDNI = document.querySelector("#DNI").value;
  let idSexo = document.querySelector("#sexo").value;
  let idPeso = document.querySelector("#peso").value;
  let idAltura = document.querySelector("#altura").value;
  let idAñoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  let personaX = new Persona(
    idNombre,
    idEdad,
    idDNI,
    idSexo,
    idPeso,
    idAltura,
    idAñoDeNacimiento
  );
  console.log(personaX);
  personaX.esMayorDeEdad();
}
