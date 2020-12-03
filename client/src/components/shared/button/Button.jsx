import React from "react"

import "./Button.css"

export default function Button(props) {
	return (
		<div>
			<button className={`button ${props.className} shrink shrink-on-hover`} onClick={props.onClick}>
				{props.content}
			</button>
		</div>
	)
}
