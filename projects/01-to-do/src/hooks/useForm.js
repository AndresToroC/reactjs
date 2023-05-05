import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [valueForm, setvalueForm] = useState(initialState)

  const handleInputChange = (e) => {
    setvalueForm({
      ...valueForm,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setvalueForm(initialState)
  }

  return {
    valueForm,
    handleInputChange,
    resetForm
  }
}