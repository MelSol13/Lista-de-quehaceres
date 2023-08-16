import React, { Fragment, useState } from "react";

const Checkbox = props => {
	const {
		onChange,
		data: { id, description, done }
	} = props;

	const [isChecked, setIsChecked] = useState(done);

	const handleCheckboxChange = event => {
		setIsChecked(event.target.checked);
		onChange(event);
	};

	return (
		<Fragment>
			<label className={`todo new-item ${isChecked ? "checked" : ""}`}>
				<input
					className="todo__state"
					name={id}
					type="checkbox"
					defaultChecked={done}
					onChange={handleCheckboxChange}
				/>
				<div className="todo__text">{description}</div>
			</label>
		</Fragment>
	);
};

export default Checkbox;