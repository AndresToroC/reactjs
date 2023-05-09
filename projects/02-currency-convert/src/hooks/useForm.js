import { useState } from "react"

export const useForm = (initialState = {}) => {
	const [valuesForm, setValuesForm] = useState(initialState)

	const handleInputChange = (e) => {
		setValuesForm({
			...valuesForm,
			[e.target.name]: e.target.value
		})
	}

	const reset = () => {
		setValuesForm(initialState)
	}

	return {
		valuesForm, 
		handleInputChange,
		reset
	}
}