import React from "react";
import {ToDo} from "../models/model";
import {AiFillEdit,AiFillDelete} from "react-icons/all";
import './styles.css';

interface props{
    toDo: ToDo;
    toDos:ToDo[];
    setToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const SingleToDo = ({toDo,toDos,setToDos}: props) =>{
    return (
        <form className="toDoSingle">
            <span className="todoSingleText">{toDo.toDo}</span>
            <div>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon">
                    <AiFillDelete/>
                </span>
            </div>
        </form>
    );
}

export default SingleToDo
