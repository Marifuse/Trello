window.addEventListener("load", function() {
  var nuevoForm = document.getElementById("añadirList");
  nuevoForm.addEventListener("click", function(e) {
		e.preventDefault();
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
}
