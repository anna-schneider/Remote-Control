import React from "react"
import Dropdown from "./shared/dropdown/Dropdown"

const dropdownOptions = [
	{ value: "0", label: "" },
	{ value: "3", label: "1st Choice" },
	{ value: "2", label: "2nd Choice" },
	{ value: "1", label: "3rd Choice" },
]

export default function Movie(props) {
	const {
		id,
		name,
		trailer,
		poster,
		handleDropDown,
		isSelected,
		isDisabled,
	} = props

	return (
		<div className={isSelected ? "selected" : ""}>
			<Dropdown
				options={dropdownOptions}
				onChange={(e) => handleDropDown({ value: e.target.value, id })}
				isDisabled={isDisabled}
			/>

			<div>{id}</div>
			<div>{name}</div>
			<div>
				<iframe
					title={name}
					alt={name}
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${trailer}`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div>
				<img
					className="posters"
					src={require(`../assets/images/${poster}`)}
					alt={name}
				/>
			</div>
		</div>
	)
}
