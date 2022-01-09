### 1. Deciding Component Hierarchy

TodoLayout (controls flexbox layout of componenets)

    StyledHeader (label todo list)

    AddForm
        FormInput (where the user will input text for new task)
            StyledInput
        StyledButton (button to add new tasks)

    TodoList
        TodoItem (as many as necessary)
            StyledTodoItem
                p + FontAwesome icon

### 2. Data flow

<em>query</em> and <em>todos</em> are stored in the TodoPage component so they can be accessed by the child components

<em>query</em> and <em>setQuery</em> are passed to the AddForm component and modified whenever the user makes a change to the input

<em>todos</em> are passed down to the TodoList component to render the todos. Only <em>todos</em> which include the current query are shown

## 3. Extra notes

1. The ListItem component was memoized to prevent unnecessary refreshes
2. I created a helper function in useLocalStorage.js to persist todos