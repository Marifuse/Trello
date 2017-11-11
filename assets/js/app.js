var container = document.createElement('section');
container.setAttribute('id', 'lista');
var label = document.createElement('label');
label.setAttribute('id', 'text3');
var añadir = document.createTextNode('Añadir una Lista...');
label.appendChild(añadir);
container.appendChild(label);
document.body.appendChild(container);

//Cuadro lista
//Crear div, input, boton, icono.

var cuadro = document.createElement('div');
cuadro.setAttribute('id', 'Cuadro');
var escrito = document.createElement('input');
escrito.setAttribute('id', 'textInput');
//document.getElementById('textInput').value = "";
escrito.setAttribute('placeholder', 'Añadir una Lista');
var boton = document.createElement('button');
boton.setAttribute('id','boton')
var guardar = document.createTextNode('Guardar');
boton.appendChild(guardar);
var cruz = document.createElement('i');
cruz.classList.add('fa', 'fa-times');


//función para desaparecer el label principal y que surja el cuadro
function agregar() {
  cuadro.appendChild(escrito);
  cuadro.appendChild(boton);
  cuadro.appendChild(cruz);
  container.appendChild(cuadro);
  label.style.display = "none";
  boton.addEventListener('click', addLista);
}

var llamar = document.getElementById('text3');
llamar.addEventListener('click', agregar);

//div que encierra un segundo cuadro, label.value, label, div, textarea, boton, icono
//segunda funcion para guardar (evento).

function addLista() {
  var texto4 = document.getElementById('textInput').value;//valor que se agrega al input
  var list1 = document.createTextNode(texto4);
  //Creación del segundo Div contenedor (grande)
  var segundoCuadro = document.createElement('div');
  segundoCuadro.setAttribute('id', 'Cuadro2');
  var labelDos = document.createElement('label');
  labelDos.setAttribute('id', 'label2');
  var labelTres = document.createElement('label');
  labelTres.setAttribute('id', 'label3');
  //Creación del tercer Div contenedor del textarea
  var tercerCuadro = document.createElement('div');
  tercerCuadro.setAttribute('id', 'Cuadro3');
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'cuadroText');
  var botonDos = document.createElement('button');
  botonDos.setAttribute('id', 'boton2');
  var añadirDos = document.createTextNode('Añadir');
  botonDos.appendChild(añadirDos);
  var cruzDos = document.createElement('i');
  cruzDos.classList.add('fa', 'fa-times');
  var link = document.createElement('a');
  link.setAttribute('href', '#');
  var tarjeta = document.createTextNode('Añadir una Tarjeta');
  //Incluyendo los hijos a los padres de las etiquetas (Div grande), para luego generar el cuadro en pantalla
  link.appendChild(tarjeta);
  segundoCuadro.appendChild(link);
  segundoCuadro.appendChild(labelDos);
  labelDos.appendChild(list1);
  segundoCuadro.appendChild(labelTres);
  segundoCuadro.appendChild(link);
  //Agregar el tercer Div de la Textarea
  segundoCuadro.appendChild(tercerCuadro);
  tercerCuadro.appendChild(textarea);
  tercerCuadro.appendChild(botonDos);
  tercerCuadro.appendChild(cruzDos);
  tercerCuadro.style.display = "none";
  lista.appendChild(segundoCuadro);
  lista.appendChild(tercerCuadro);
}






















/*window.addEventListener("load", function() {
  var nuevoForm = document.getElementById("añadirList");
  nuevoForm.addEventListener("click", function(e) {
    añadirList.style.display = 'none';
		/*e.preventDefault();
		addNewForm(this);
	});
});

function addNewForm(elemento){
  var padre = elemento.parentElement;
	var form = document.createElement("form");
	padre.appendChild(form);
  form.setAttribute("id","nuevo");
	form.classList.add("formulario");
  var input = document.createElement("input");
	form.appendChild(input);
	input.setAttribute("id","inputForm");
  input.focus();
	input.classList.add("entrada");
  var boton = document.createElement("button");
	form.appendChild(boton);
	boton.setAttribute("id","botonForm");
	boton.classList.add("boton");
  boton.addEventListener("click",function(event){
		event.preventDefault();
		newTool(elemento);
		deleteForm(elemento);
		addAgregar(elemento);
		elemento.parentElement.classList.add("trello-body");
		document.getElementById("añadirList").classList.add("d-none");
		document.getElementById("nuevo").classList.add("d-none");
		addNewLista(elemento);
	});
	var textBoton = document.createTextNode("Añadir lista");
	boton.appendChild(textBoton);
}*/
