import React from "react";
import { useState } from "react";

//Se importa el archivo de formularioTarea
import FormularioTarea from "./formularioTarea";
import Tareas from "./tarea";

//create your first component
export function Home() {
	//Función para la lista de tareas
	const [listaDeTareas, setListaDeTareas] = useState([]);

	//Agregar una tarea nueva
	const tareaNueva = tarea => {
		setListaDeTareas([tarea, ...listaDeTareas]);
	};

	//Eliminar una tarea
	const eliminarTarea = id => {
		const lista = listaDeTareas.filter((e, index) => index !== id);
		setListaDeTareas(lista);
	};

	<Tareas value=""></Tareas>;
	//Retorna
	return (
		<div className="container">
			<FormularioTarea tareaNueva={tareaNueva} />
			{listaDeTareas.map((e, index) => (
				<Tareas
					key={(e, index)}
					tarea={e}
					eliminarTarea={eliminarTarea}
					id={index}
				/>
			))}
		</div>
	);
}
