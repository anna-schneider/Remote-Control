import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./EventVote.css"
import "../../services/events"
import { getOneEvent, putEvent } from "../../services/events"
import Movie from "../../components/movie/Movie"
import Button from "../../components/shared/button/Button"

export default function EventVote() {
	const [event, setEvent] = useState({ movies: [] })
	const [selectedMovies, updateSelectedMovies] = useState({})
	const [formData, setFormData] = useState({
		name: "",
		date: "",
	})
	const { id } = useParams()

	useEffect(async () => {
		const singleEvent = await getOneEvent(id)
		setEvent(singleEvent)

		setFormData((formData) => ({
			...formData,
			name: singleEvent.name,
			date: singleEvent.date,
			username: "PHIL",
			movies: selectedMovies,
		}))

		console.log(singleEvent)
	}, [id, setEvent])

	const handleDropDown = (obj) => {
		const { value, id } = obj
		const movies = { ...selectedMovies }

		if (movies[id] && value === "0") {
			delete movies[id]
			updateSelectedMovies(movies)
		} else {
			movies[id] = value
			updateSelectedMovies(movies)
		}

		setFormData((formData) => ({
			...formData,
			movies,
		}))
	}

	console.log("selectedMovies", selectedMovies)

	const onClick = () => {
		putEvent(id, formData)
	}

	return (
		<div className="event-vote-container">
			<div className="event-info">
				<h2 className="event-name">{event.name}</h2>
				<h2>{event.date}</h2>
			</div>
			<div className="vote-selection">
				{event.movies.map((movie) => {
					return <Movie {...movie} handleDropDown={handleDropDown} />
				})}
			</div>
			<Button content="Submit Vote" onClick={onClick} />
		</div>
	)
}
