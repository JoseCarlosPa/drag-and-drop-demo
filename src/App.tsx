import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {ToDo} from "./models/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {

    const [toDo, setToDo] = useState<string>("");
    const [toDos, setToDos] = useState<ToDo[]>([]); // de tipo "ToDo" , arreglo que permitira tener todas las tarjetas

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (toDo) {
            setToDos([...toDos, {id: Date.now(), toDo: toDo, state: 1}])
            setToDo("");
        }
    }
    console.log(toDo);

    return (
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
            />
        </div>
    );
}

export default App;
