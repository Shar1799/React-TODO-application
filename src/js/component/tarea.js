import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

//Función para tareas
const Tareas = props => {
	//Función para borrar una tarea
	const borrarTarea = () => {
		props.eliminarTarea(props.id);
	};

	return (
		<div className="tareas text-center mt-3">
			<span>
				<b>{props.tarea}</b>
			</span>
			<span onClick={borrarTarea}>
				<u>Borrar</u>
			</span>
		</div>
	);
};

export default Tareas;
