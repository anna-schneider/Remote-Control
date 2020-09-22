import React from "react"

import "./Movie.css"
import Dropdown from "../shared/dropdown/Dropdown"

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
		isSelected = false,
		isDisabled = false,
	} = props

	return (
		<div className={isSelected ? "selected" : ""}>
			<div className="option-container">
				<div className="poster-container">
					<img className="poster" src={`/images/${poster}`} alt={name} />
					<div>{id}</div>
					<div className="choice-container">
						<div className="movie-title">{name}</div>
						<div>
							<Dropdown
								options={dropdownOptions}
								onChange={(e) => handleDropDown({ value: e.target.value, id })}
								isDisabled={isDisabled}
							/>
						</div>
					</div>
				</div>

				<div>
					<iframe
						className="trailer"
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
			</div>
		</div>
	)
}
