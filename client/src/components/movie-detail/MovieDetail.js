import React from "react"

import "./MovieDetail.css"

export default function MovieDetail(props) {
	const { id, name, poster } = props

	return (
		<div>
			<div>{id}</div>
			<div className="detail-container">
				<div className="name">{name}</div>
				<div>
					<img
						className="posters"
						src={require(`../../assets/images/${poster}`)}
						alt={name}
					/>
				</div>
			</div>
		</div>
	)
}
