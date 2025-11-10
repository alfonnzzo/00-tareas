import { useState } from "react";

export const useForm = (initialValue) => {
    const [formState, setFormState] = useState(initialValue);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        console.log(name, value);
        setFormState({ ...formState, [name]: value});
    };
    const handleReset = () => {
        setFormState(initialValue);
    };
    return {formState, handleChange, handleReset};
};