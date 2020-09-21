import React, { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"

import "./EventDetail.css"
import "../../services/events"
import { getOneEvent } from "../../services/events"
import MovieDetail from "../../components/MovieDetail"

export default function EventDetail() {
	const [event, setEvent] = useState({ movies: [] })
	const { id } = useParams()

	const inputRef = useRef()
	const copyToClipboard = () => {
		const copyText = inputRef.current.value

		if (navigator.clipboard) {
			navigator.clipboard
				.writeText("my url")
				.then(() => {
					console.log("copy success")
				})
				.catch((error) => {
					console.log(error)
				})
		} else {
			inputRef.current.select()
			console.log(document.execCommand("copy")) //true
			document.execCommand("copy")
		}
	}

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
						<MovieDetail
							{...movie}
							isDisabled={false}
							isSelected={true}
							handleDropDown={() => {}}
						/>
					)
				})}
			</p>
			<button ref={inputRef} onClick={copyToClipboard}>
				Copy URL
			</button>
			<button>Delete Event</button>
		</div>
	)
}
