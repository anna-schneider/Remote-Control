import api from "./api-config"

export const getOneEvent = async (id) => {
	const resp = await api.get(`/events/${id}`)
	return resp.data
}

export const postEvent = async (formData) => {
	console.log("postEvent form data", formData)
	const resp = await api.post("/events", { event: formData })
	return resp.data
}

export const putEvent = async (id, formData) => {
	console.log("putEvent form data", formData)
	const resp = await api.put(`/events/${id}`, { event: formData })
	return resp.data
}

export const deleteEvent = async (id) => {
	const resp = await api.delete(`/events/${id}`)
	return resp.data
}
