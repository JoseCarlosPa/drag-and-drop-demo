import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {ToDo} from "./models/model";
import TodoList from "./components/TodoList";
import {DragDropContext, DropResult} from 'react-beautiful-dnd';

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

    const onDragEnd = (result: DropResult) => {

        const {source, destination} = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;
        let add,
            active = toDos,
            progress = doing,
            complete = completedToDos;

        // Checamos a que parte del Droppable id corresponde y se lo quitamos según nos regrese el API
        if (source.droppableId === 'ToDoList') {
            add = active[source.index];
            active.splice(source.index, 1);
        } else if(source.droppableId === 'Doing') {
            add = progress[source.index];
            progress.splice(source.index, 1);

        }else{
            add = complete[source.index];
            complete.splice(source.index, 1);

        }

        // Ahora Agregamos lo que se quito al source destino
        if (destination.droppableId === 'ToDoList') {
            active.splice(destination.index,0,add)

        } else if(destination.droppableId === 'Doing') {
            progress.splice(destination.index,0,add)
            console.log('paso por Doing');
        }else{
            complete.splice(destination.index,0,add)
        }

        // Agregarlo a nuestro estado
        setcompletedToDos(complete);
        setDoing(progress);
        setToDos(active);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
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
