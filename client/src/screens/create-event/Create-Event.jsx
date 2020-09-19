import React, { useState } from "react"

export default function Create_Event() {
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
		<form
			onSubmit={(e) => {
				e.preventDefault()
				// props.homeSubmit(nameData)
			}}
		>
			<h3>Movie Party Name</h3>
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
					type="text"
					name="partydate"
					value={partydate}
					onChange={handleChange}
				/>
			</label>
			{/* <Link to="/home" name={username}></Link> */}
			<button>Submit</button>
		</form>
	)
}
