import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle

export function Home() {
	// Creates todo list
	const [list, setList] = useState([
		{ label: "Walk the dog", isDone: false },
		{ label: "Do some laundry", isDone: false },
		{ label: "Finish up React projects", isDone: false }
	]);

	// Creates todo item
	const [todo, setTodo] = useState("");

	// e = event | Function handles submit
	const addTodo = e => {
		// Prevents a browser’s default behavior for events
		e.preventDefault();

		setList([
			// This stops the existing list from being overridden
			...list,
			{
				// Assigns todo value to label
				label: todo,
				isDone: false
			}
		]);

		// Resets todo back to empty string
		setTodo("");
	};

	const removeTodo = e => {
		const label = e.target.getAttribute("label");
		setList(list.filter(item => item.label != label));
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center h-100">
			<h1>To Do</h1>
			{/* When enter is pressed, the function "addTodo" runs */}
			<form onSubmit={addTodo}>
				<ul className="list-unstyled d-flex flex-column">
					<li>
						<input
							type="text"
							placeholder="What has to be done?"
							className="form-control"
							value={todo}
							/* When user changes content of input field, event will trigger setTodo */
							onChange={e => setTodo(e.target.value)}
						/>
					</li>
					{// Loop to create li
					list.map((item, index) => {
						return (
							<li
								key={index}
								label={item.label}
								className="d-flex listItem"
								onClick={removeTodo}>
								{item.label}{" "}
								<span className="ml-auto">
									<FontAwesomeIcon
										className="icon"
										icon={faTimes}
									/>
								</span>
							</li>
						);
					})}
					<li className="mt-3">
						<span id="number">{list.length}</span> item
						{list.length > 1 || list.length === 0 ? "s" : null} left
					</li>
				</ul>
			</form>
		</div>
	);
}
