import React from "react";
import "./styles.css";
import {ToDo} from "../models/model";
import SingleToDo from "./SingleToDo";
import {Droppable} from "react-beautiful-dnd";

interface props {
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    doing: ToDo[];
    setDoing: React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos: ToDo[];
    setcompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList = ({toDos, setToDos,doing,setDoing,completedToDos,setcompletedToDos}: props) => {
    return (
        <div className="container">

            {/*Columna de Cosas pór hacer, por ende aqui si enviaran todas lastarjetas nuevas*/}
            <Droppable droppableId="ToDoList">
                {
                    (provided) => (
                        <div className="toDos" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="toDosHeading">
                                Por Hacer
                            </span>
                            {
                                toDos.map((toDo, index) => (
                                    <SingleToDo
                                        index={index}
                                        toDo={toDo}
                                        toDos={toDos}
                                        setToDos={setToDos}
                                        key={toDo.id}/>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>

            {/*Columna de cosas en progreso*/}
            <Droppable droppableId="Doing">
                {
                    (provided) => (
                        <div className="toDos doing" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="toDosHeading">
                                En progreso
                            </span>
                            {
                                doing.map((toDo,index) => (
                                    <SingleToDo
                                        index={index}
                                        toDo={toDo}
                                        toDos={doing}
                                        setToDos={setDoing}
                                        key={toDo.id}/>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>

            {/*Columna de cosas Terminadas*/}
            <Droppable droppableId="completedToDos">
                {
                    (provided)=>(
                        <div className="toDos done" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="toDosHeading">
                                Terminados
                            </span>
                            {
                                completedToDos.map((toDo,index) => (
                                    <SingleToDo
                                        index={index}
                                        toDo={toDo}
                                        toDos={toDos}
                                        setToDos={setcompletedToDos}
                                        key={toDo.id}/>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>



        </div>
    );
}

export default TodoList
