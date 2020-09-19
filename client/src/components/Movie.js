import React from "react"

export default function Movie(props) {
	const { id, name, trailer, poster } = props

	return (
		<div>
			<div>{id}</div>
			<div>{name}</div>
			<div>
				<iframe
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${trailer}`}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div>{/* <img src={poster} /> */}</div>
		</div>
	)
}
