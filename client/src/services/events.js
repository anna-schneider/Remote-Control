import api from "./api-config"

export const getOneEvent = async (id) => {
	const resp = await api.get(`/events/${id}`)
	return resp.data
}

export const postEvent = async (formData) => {
	const resp = await api.post("/events", { event: formData })
	return resp.data
}

export const putEvent = async (id) => {
	const resp = await api.put(`/events/${id}`)
	return resp.data
}
