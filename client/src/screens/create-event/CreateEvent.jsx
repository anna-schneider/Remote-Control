import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { postEvent } from "../../services/events"

import "./CreateEvent.css"
import Movie from "../../components/Movie.js"
import api from "../../services/api-config"

export default function CreateEvent(props) {
	const [movies, updateMovies] = useState([])
	const [selectedMovies, updateSelectedMovies] = useState({})
	const [event, setEvent] = useState(null)
	const [formData, setFormData] = useState({
		name: "",
		date: "",
	})
	const { name, date } = formData
	const { username } = props
	const history = useHistory()
	const hasFullList = Object.keys(selectedMovies).length > 2

	useEffect(() => {
		const result = async () => {
			const data = await api.get("/movies")

			updateMovies(data.data)
		}
		result()
	}, [])

	const checkStatus = (movie) => {
		const { id } = movie
		const isSelected = selectedMovies[id] !== undefined

		return {
			isSelected,
			isDisabled: !isSelected && hasFullList,
		}
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const onClick = async () => {
		try {
			//Need value back from postevent to get event id; remove hard-code id
			const singleEvent = await postEvent({
				name,
				date,
				movies: selectedMovies,
				username,
			})
			setEvent(singleEvent)

			// const id = "7"

			history.push(`/eventdetail/${singleEvent.id}`)
		} catch (e) {
			console.log(e)
		}
	}
	const handleDropDown = (obj) => {
		const { value, id } = obj
		const movies = { ...selectedMovies }

		if (movies[id] && value === "0") {
			delete movies[id]
			updateSelectedMovies(movies)
		} else {
			const chosenMovies = Object.keys(movies)

			if (chosenMovies.length < 3) {
				updateSelectedMovies({
					...movies,
					[id]: value,
				})
			}
		}
	}

	return (
		<div className="eventpage">
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<h2 className="create-party">Create Your Remote Movie Party</h2>
				<label>
					Party Name:
					<input type="text" name="name" value={name} onChange={handleChange} />
				</label>
				<label>
					Party Date:
					<input type="date" name="date" value={date} onChange={handleChange} />
				</label>

				<button onClick={onClick}>Create Event</button>

				{movies.map((movie) => {
					const { isDisabled, isSelected } = checkStatus(movie)

					return (
						<Movie
							{...movie}
							isDisabled={isDisabled}
							isSelected={isSelected}
							handleDropDown={handleDropDown}
						/>
					)
				})}
			</form>
		</div>
	)
}
