import React, { useState } from 'react';
import EmptyCheckBox from "./assets/checkbox (1).svg";
import CheckBox from "./assets/checkbox.svg";
import { Div, Li, StyledTaskListDiv, TimeStyle, StyledTaskListDivTimeDelete, H5, H4 } from "./styles/TodoApp.styled";  // Add import statements for styled components
import { Todo } from "./Model";  

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TaskList({ todos, setTodos }: Props) {
    const [hoveredTimes, setHoveredTimes] = useState<(string | null)[]>(new Array(todos.length).fill(null));
    const [showCheckboxes, setShowCheckboxes] = useState<boolean[]>(new Array(todos.length).fill(false));

    const getCurrentMonthAndDate = () => {
        const currentTime = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        return currentTime.toLocaleDateString(undefined, options);
    };

    const handleMouseEnter = (index: number) => {
        const newHoveredTimes = [...hoveredTimes];
        newHoveredTimes[index] = getCurrentMonthAndDate();
        setHoveredTimes(newHoveredTimes);
    };

    const handleMouseLeave = (index: number) => {
        const newHoveredTimes = [...hoveredTimes];
        newHoveredTimes[index] = null;
        setHoveredTimes(newHoveredTimes);
    };

    const handleTaskClick = (index: number) => {
        const newShowCheckboxes = [...showCheckboxes];
        newShowCheckboxes[index] = !showCheckboxes[index];
        setShowCheckboxes(newShowCheckboxes);
    };

    const handleDelete = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const getRandomBorderColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <Div>
            {todos.map((todo, index) => (
                <Li key={todo.id}>
                    <StyledTaskListDiv
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <H5 onClick={() => handleTaskClick(index)}>
                            {showCheckboxes[index] ? (
                                <img src={CheckBox} alt="checkbox.svg" />
                            ) : (
                                <img src={EmptyCheckBox} alt="checkbox (1).svg" />
                            )}
                        </H5>
                        <span style={{ textDecoration: showCheckboxes[index] ? 'line-through' : 'none' }}>{todo.todo}</span>
                    </StyledTaskListDiv>
                    <StyledTaskListDivTimeDelete
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <TimeStyle>
                            {hoveredTimes[index]}
                        </TimeStyle>
                        <H4 style={{ borderColor: getRandomBorderColor() }} onClick={() => handleDelete(index)}>
                        </H4>
                    </StyledTaskListDivTimeDelete>
                </Li>
            ))}
        </Div>
    );
}

