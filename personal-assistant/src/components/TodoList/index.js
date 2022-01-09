import React, { memo } from 'react'
import ListItem from '../ListItem/index';
import { StyledTodoList } from './styles';

const TodoList = ( { todos, query, onRemove } ) => {

    const filtered = todos.filter((obj) => {
        return obj.text.includes(query);
    });

    return (
    <StyledTodoList>
        { filtered.length === 0
        ? <p style={{fontFamily: "--apple-system, BlinkMacSystemFont", color: "#DDFFBC"}}>add a new task :)</p> : filtered.map(todo => 
            <ListItem key={todo.id} todo={todo} onRemove={onRemove}/>)}
    </StyledTodoList>
);
        }

export default memo(TodoList);