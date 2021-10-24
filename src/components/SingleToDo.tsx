import React, {useState} from "react";
import {Draggable} from "react-beautiful-dnd";
import {AiFillEdit, AiFillDelete} from "react-icons/all";
import {ToDo} from "../models/model";
import './styles.css';

interface props {
    index: number;
    toDo: ToDo;
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const SingleToDo = ({index, toDo, toDos, setToDos}: props) => {

    // UseSates para edición de una tarjeta

    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

    /*
    * Handle para editar una tarjeta
    * Input: event:React Form Event & id:number
    * Output: Edición en tarjeta elegida segun el id
    */
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setToDos(toDos.map((toDo) => (
            toDo.id === id ? {...toDo, toDo: editToDo} : toDo))
        );
        setEdit(false);
    };

    /*
    * Handel para eliminar una tarjeta
    * Input: id:number -> Id de la tarjeta
    * OutPut: Action event delete
    */
    const handleDelete = (id: number) => {
        setToDos(toDos.filter((toDo) => toDo.id !== id))
    };

    return (
        <Draggable draggableId={toDo.id.toString()} index={index}>
            {
                (provided) => (
                    <form
                        className="toDoSingle"
                        onSubmit={(e) => handleEdit(e, toDo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {edit ? (
                            <input value={editToDo} onChange={(e) => setEditToDo(e.target.value)}
                                   className="todoSingleText"/>
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
                            <span className="icon" onClick={() => handleDelete(toDo.id)}>
                                <AiFillDelete/>
                            </span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    );
}

export default SingleToDo
