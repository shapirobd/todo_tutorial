import React from "react";
import "./Todo.css";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
	return (
		<div className="Todo">
			<div className="Todo-complete">
				<form>
					<input type="checkbox" onClick={(evt) => toggleComplete(evt, todo)} />
				</form>
			</div>
			<div className="Todo-text">
				<p>{todo.text}</p>
			</div>
			<div className="Todo-delete" onClick={() => removeTodo(todo)}>
				X
			</div>
		</div>
	);
};

export default Todo;
