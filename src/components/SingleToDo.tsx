import React, {useState} from "react";
import {ToDo} from "../models/model";
import {AiFillEdit, AiFillDelete} from "react-icons/all";
import './styles.css';

interface props {
    toDo: ToDo;
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const SingleToDo = ({toDo, toDos, setToDos}: props) => {

    // UseSates para edicion de una tarjeta
    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

    // Handle para editar una tarjeta
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setToDos(toDos.map((toDo) => (
            toDo.id === id ? {...toDo, toDo: editToDo} : toDo))
        );
        setEdit(false);
    };

    return (
        <form className="toDoSingle" onSubmit={(e) => handleEdit(e, toDo.id)}>
            {edit ? (
                <input value={editToDo} onChange={(e) => setEditToDo(e.target.value)} className="todoSingleText"/>
            ) : toDo.state ? (
                <span className="todoSingleText">{toDo.toDo}</span>
            ) : (
                <span className="todoSingleText">{toDo.toDo}</span>
            )}
            <div>
                <span className="icon" onClick={() => {
                    if (!edit) {
                        setEdit(!edit)
                    }
                }}>
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
