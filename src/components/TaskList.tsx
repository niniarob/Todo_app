import "./styles/TodoApp.styled";
import {Div} from "./styles/TodoApp.styled";
import { Todo } from "./Model";
import { Li } from "./styles/TodoApp.styled";


interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


export default function TaskList({todos, setTodos}: Props){

    return(
        <>
    <Div>
        {todos.map((todo) => (
        <Li key={todo.id}>{todo.todo}</Li>
         ))}
    </Div>
        </>
    )
}