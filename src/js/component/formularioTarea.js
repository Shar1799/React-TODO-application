import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

//create your first component
const FormularioTarea = props => {
	//Estado
	const [inputText, setInputText] = useState("");
	//Creación de una validación
	const [validar, setValidar] = useState(true);

	//Función para manejar el formulario
	const manejarFormulario = event => {
		setInputText(event.target.value);
	};

	//Función que permite que no se actualicen las tareas
	const submit = event => {
		event.preventDefault();

		if (inputText.trim() !== "") {
			props.tareaNueva(inputText);
			setInputText("");
			setValidar(true);
		} else {
			setValidar(false);
		}
	};

	//Retorna
	return (
		<div className="text-center mt-5">
			<form className="formulario" onSubmit={submit}>
				<h1>LISTA DE TAREAS</h1>
				<span>Añadir una tarea</span>
				<input value={inputText} onChange={manejarFormulario} />
				<button>Añadir</button>
			</form>
			{!validar && (
				<div className="v_agregarTarea">Agregue una tarea...</div>
			)}
		</div>
	);
};

export default FormularioTarea;
