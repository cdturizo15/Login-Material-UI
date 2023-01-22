import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [state, setState] = useState(initialForm)

    const handleInputChange = ({target}) =>{
        const {name, value} = target
        setState({...state, [name]: value})
    }

    return{state, handleInputChange}
}