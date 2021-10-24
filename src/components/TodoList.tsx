import React from "react";
import "./styles.css";
import {ToDo} from "../models/model";
import SingleToDo from "./SingleToDo";

interface props {
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList = ({toDos, setToDos}: props) => {
    return (
        <div className="toDos">
            {toDos.map(toDo => (
                <SingleToDo
                    toDo={toDo}
                    key={toDo.id}
                    toDos={toDos}
                    setToDos={setToDos}
                />
            ))}
        </div>
    );
}

export default TodoList
