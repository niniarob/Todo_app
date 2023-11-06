import react, {useRef}from "react";
import {Form} from "./styles/TodoApp.styled";
import { Input } from "./styles/TodoApp.styled";



interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    HandleAdd: (e: React.FormEvent) => void;
}

export default function TaskInput({todo, setTodo, HandleAdd} : Props){
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <>
        <Form  onSubmit={(e) => {
            HandleAdd (e)
            inputRef.current?.blur()
            }} >
         <Input 
         ref={inputRef}
         type="input" 
         value={todo}
         onChange={(e)=>setTodo (e.target.value)}
         placeholder="Create new task" />
         </Form>
        </>
    )
}