import React from "react"
import { StyledButton } from './styles'
import FormInput from "../FormInput";
import { nanoid } from 'nanoid';

const AddForm = ({ todos, setTodos, query, setQuery }) => {

    const addTodo = (e) => {
        e.preventDefault();

        if (query !== "") {
            setTodos([...todos, {id: nanoid(), text: query, checked: false}]);
            setQuery("");
        }
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <FormInput value={query} setValue={setQuery} placeholder={"Enter task..."} />
                <StyledButton type="submit">+</StyledButton>
            </form>
        </div>
    );
}
export default AddForm
