import React, { useState, useEffect } from "react"
import api from "../services/api-config"

export default function Test() {
	const [movies, updateMovies] = useState()

	useEffect(() => {
		const result = async () => {
			const data = await api.get("/movies")
			console.log(data.data)

			updateMovies(data)
		}
		result()
	}, [])

	return (
		<div>
			<h1>this is the test page</h1>
		</div>
	)
}
