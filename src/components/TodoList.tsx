import React from "react";
import "./styles.css";
import {ToDo} from "../models/model";
import SingleToDo from "./SingleToDo";

interface props {
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    doing: ToDo[];
    setDoing:React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos:ToDo[];
    setcompletedToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList = ({toDos, setToDos}: props) => {
    return (
        <div className="container">

            <div className="toDos">
                <span className="toDosHeading">
                    Por Hacer
                </span>
                {
                    toDos.map((toDo) => (
                        <SingleToDo toDo={toDo} toDos={toDos} setToDos={setToDos} key={toDo.id}/>
                    ))
                }
            </div>
            <div className="toDos doing">
                <span className="toDosHeading">
                    En progreso
                </span>
                {
                    toDos.map((toDo) => (
                        <SingleToDo toDo={toDo} toDos={toDos} setToDos={setToDos} key={toDo.id}/>
                    ))
                }
            </div>

            <div className="toDos done">
                <span className="toDosHeading">
                    Terminados
                </span>
                {
                    toDos.map((toDo) => (
                        <SingleToDo toDo={toDo} toDos={toDos} setToDos={setToDos} key={toDo.id}/>
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList
