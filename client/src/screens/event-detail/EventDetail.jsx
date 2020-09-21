import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./EventDetail.css"
import "../../services/events"
import { getOneEvent } from "../../services/events"
import Movie from "../../components/Movie"

export default function EventDetail() {
	const [event, setEvent] = useState({ movies: [] })
	const { id } = useParams()

	useEffect(async () => {
		const singleEvent = await getOneEvent(id)
		setEvent(singleEvent)
	}, [id, setEvent])

	console.log(event)

	return (
		<div className="event-detail-container">
			<h2>Your Event</h2>
			<p>
				Hi attendees of {event.name}, you suck. {event.id}
			</p>
			<p>
				{event.movies.map((movie) => {
					return (
						<Movie
							{...movie}
							isDisabled={false}
							isSelected={true}
							handleDropDown={() => {}}
						/>
					)
				})}
			</p>
			<button>Copy URL</button>
			<button>Delete Event</button>
		</div>
	)
}
