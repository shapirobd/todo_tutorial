import React, { useState } from "react";
import Todo from "./Todo";
import Input from "./Input";
import "./List.css";

const List = () => {
	const [todos, setTodos] = useState([]);

	const toggleComplete = (evt, todo) => {
		const { checked } = evt.target;
		todo.complete = checked;
		console.log(todo);
	};

	const removeTodo = (todo) => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	return (
		<div className="List">
			<div className="List-todos">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						removeTodo={removeTodo}
					/>
				))}
			</div>
			<Input setTodos={setTodos} />
		</div>
	);
};

export default List;
