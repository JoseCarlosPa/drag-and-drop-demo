import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {ToDo} from "./models/model";
import TodoList from "./components/TodoList";
import {DragDropContext} from 'react-beautiful-dnd';

const App: React.FC = () => {

    const [toDo, setToDo] = useState<string>("");
    const [toDos, setToDos] = useState<ToDo[]>([]); // de tipo "ToDo" , arreglo que permitira tener todas las tarjetas
    const [doing, setDoing] = useState<ToDo[]>([]);
    const [completedToDos, setcompletedToDos] = useState<ToDo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (toDo) {
            setToDos([...toDos, {id: Date.now(), toDo: toDo, state: "To Do"}])
            setToDo("");
        }
    }
    console.log(toDo);

    return (
        <DragDropContext onDragEnd={()=>{}}>
            <div className="App">
                <span className="heading">LeadSales</span>
                <InputFeild
                    toDo={toDo}
                    setToDo={setToDo}
                    handleAdd={handleAdd}
                />
                <TodoList
                    toDos={toDos}
                    setToDos={setToDos}
                    doing={doing}
                    setDoing={setDoing}
                    completedToDos={completedToDos}
                    setcompletedToDos={setcompletedToDos}
                />
            </div>
        </DragDropContext>
    );
}

export default App;
