import React, { useState, useEffect } from "react"
import api from "../../services/api-config"

import "./CreateEvent.css"
import Movie from "../../components/Movie.js"

export default function CreateEvent() {
	const [movies, updateMovies] = useState([])

	useEffect(() => {
		const result = async () => {
			const data = await api.get("/movies")
			console.log(data.data)

			updateMovies(data.data)
		}
		result()
	}, [])

	const [formData, setFormData] = useState({
		partyname: "",
		partydate: "",
	})
	const { partyname, partydate } = formData

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<div className="eventpage">
			<form
				onSubmit={(e) => {
					e.preventDefault()
					// props.homeSubmit(nameData)
				}}
			>
				<h3>Create Your Movie Party</h3>
				<label>
					Party Name:
					<input
						type="text"
						name="partyname"
						value={partyname}
						onChange={handleChange}
					/>
				</label>
				<label>
					Party Date:
					<input
						type="date"
						name="partydate"
						value={partydate}
						onChange={handleChange}
					/>
				</label>
				{/* <Link to="/home" name={username}></Link> */}
				<button>Create Event</button>

				{movies.map((movie) => (
					<Movie {...movie} />
				))}
			</form>
		</div>
	)
}
