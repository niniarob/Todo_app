import React, {useState} from "react";
import "./components/styles/TodoApp.styled";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { GlobalStylesComponent } from './components/GlobalStyles';
import { TodoAppDiv } from "./components/styles/TodoApp.styled";
import { Todo } from "./components/Model";


function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const HandleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo){

      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  // console.log(todo);


  return (
    <>
      <GlobalStylesComponent />
      <TodoAppDiv>
      <TaskInput  todo={todo} setTodo={setTodo} HandleAdd={HandleAdd} />
      <TaskList todos={todos} setTodos={setTodos}/>
      </TodoAppDiv>
    </>
  );
}

export default App;
