import React, { useState, useEffect } from "react"
// import { useParams } from "react-router"
import { postEvent } from "../../services/events"

import "./CreateEvent.css"
import Movie from "../../components/Movie.js"
import api from "../../services/api-config"

export default function CreateEvent(props) {
	const [movies, updateMovies] = useState([])
	const [selectedMovies, updateSelectedMovies] = useState([])
	const [event, setEvent] = useState(null)
	const [formData, setFormData] = useState({
		name: "",
		date: "",
	})
	const { name, date } = formData
	const { username } = props
	useEffect(() => {
		const result = async () => {
			const data = await api.get("/movies")
			console.log(data.data)

			updateMovies(data.data)
		}
		result()
	}, [])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const onClick = async () => {
		try {
			const singleEvent = await postEvent({
				name,
				date,
				movies: selectedMovies,
				username,
			})
			setEvent(singleEvent)
		} catch (e) {
			console.log(e)
		}
	}
	const handleCheckbox = (e) => {
		debugger
		//take in 2 params; id & whether it was checked (checked => add, unchecked => filter it out)
	}
	return (
		<div className="eventpage">
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<h3>Create Your Remote Movie Party</h3>
				<label>
					Party Name:
					<input type="text" name="name" value={name} onChange={handleChange} />
				</label>
				<label>
					Party Date:
					<input type="date" name="date" value={date} onChange={handleChange} />
				</label>
				{/* <Link to="/home" name={username}></Link> */}
				<button onClick={onClick}>Create Event</button>

				{movies.map((movie) => (
					<Movie {...movie} handleCheckbox={handleCheckbox} />
				))}
			</form>
		</div>
	)
}
