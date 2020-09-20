import { createEvent } from "@testing-library/react"
import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import api from "../../services/api-config"

export default function Home(props) {
	const { username, setNameData } = props
	const history = useHistory()

	const handleChange = (e) => {
		const { name, value } = e.target
		setNameData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const onButtonClick = () => {
		// await axios post
		//    on success set reroute to createEvent page
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				history.push("/createEvent")
			}}
		>
			<h3>Enter Name</h3>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={username}
					onChange={handleChange}
				/>
			</label>
			<Link to="/createevent" name={username}></Link>
			<button>Submit</button>
		</form>
	)
}
