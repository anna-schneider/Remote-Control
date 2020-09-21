import React from "react"

export default function MovieDetail(props) {
	const { id, name, poster } = props

	return (
		<div>
			<div>{id}</div>
			<div>{name}</div>
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
