import React, { useState } from "react";
import { v4 } from "uuid";
import "./Input.css";

const Input = ({ setTodos }) => {
	const [formData, setFormData] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setTodos((todos) => [
			...todos,
			{ id: v4(), text: formData, complete: false },
		]);
		setFormData("");
	};

	return (
		<div className="Input">
			<form onSubmit={handleSubmit}>
				<input
					className="Input-text"
					type="text"
					placeholder="Enter text here"
					value={formData}
					onChange={(evt) => setFormData(evt.target.value)}
				/>
			</form>
		</div>
	);
};

export default Input;
