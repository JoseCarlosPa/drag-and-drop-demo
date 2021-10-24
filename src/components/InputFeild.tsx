import React from "react";
import './styles.css';

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent) =>void;
}

const InputFeild: React.FC<Props> = ({toDo, setToDo,handleAdd}: Props) => {

    return (
        <form className="input" onSubmit={ (e) =>handleAdd(e)}>
            <input type="input" placeholder="Nueva tarjeta" className="inputBox" value={toDo}
                   onChange={(e) => setToDo(e.target.value)}/>
            <button className="inputSubmit">Registrar</button>
        </form>
    );
}

export default InputFeild
