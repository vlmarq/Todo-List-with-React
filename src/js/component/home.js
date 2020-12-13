import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [list, setList] = useState([
		{ label: "Walk the dog", isDone: false },
		{ label: "Do some laundry", isDone: false },
		{ label: "Finish up React projects", isDone: false }
	]);

	const [todo, setTodo] = useState("");

	// e = event
	const handleSubmit = e => {
		e.preventDefault();
		// let auxillaryList = list;
		// When enter is pushed // desired result: add input to list
		if (e.keyCode === 13) {
			// auxillaryList.push(todo)
			// setList(auxillaryList)

			// returns copy of combined arrays
			let aux = list.concat({ label: todo, isDone: false });
			setList(aux);
		}
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<h1>To Do List</h1>
			<form>
				<ul className="list-unstyled">
					<li>
						<input
							type="text"
							placeholder="What has to be done?"
							className="form-control"
							// responds to any change to events
							onChange={e => setTodo(e.target.value)}
						/>
					</li>
					{// Loop to create li
					list.map((item, index) => {
						return (
							<li key={index}>
								{item.label}{" "}
								<span>
									<FontAwesomeIcon icon={faTimes} />
								</span>
							</li>
						);
					})}
					<li>
						{list.length} item
						{list.length > 1 || list.length === 0 ? "s" : null} left
					</li>
				</ul>
			</form>
		</div>
	);
}
