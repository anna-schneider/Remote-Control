import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Home(props) {
	const [nameData, setNameData] = useState({
		username: "",
	})
	const { username } = nameData

	const handleChange = (e) => {
		const { name, value } = e.target
		setNameData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				props.homeSubmit(nameData)
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
			<Link to="/home" name={username}></Link>
			<button>Submit</button>
		</form>
	)
}
