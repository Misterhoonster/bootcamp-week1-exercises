import React from 'react'
import { StyledListItem } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListItem = ({ todo, onRemove }) => {
    return (
        <StyledListItem>
                {todo.checked ? <p style={{textDecoration: "line-through"}}>{todo.text}</p> : <p>{todo.text}</p>}
                <button onClick={() => onRemove(todo.id)}><FontAwesomeIcon id="trashIcon" icon={faTrashAlt} /></button>
        </StyledListItem>
    );
}

export default ListItem;