import React, { useState } from "react"

export default function Dropdown(props) {
	const { options, onChange, isDisabled } = props
	const [selectedOption, setSelectedOption] = useState(options[0].value)

	return (
		<select
			disabled={isDisabled}
			value={selectedOption}
			onChange={(e) => {
				setSelectedOption(e.target.value)
				onChange(e)
			}}
		>
			{options.map((obj) => (
				<option value={obj.value}>{obj.label}</option>
			))}
		</select>
	)
}
